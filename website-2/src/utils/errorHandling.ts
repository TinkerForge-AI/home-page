/**
 * Robust Error Handling and Debugging Utilities for TinkerForge AI
 * Provides detailed error tracking, stack traces, and debugging information
 */

export interface ErrorContext {
  component?: string;
  function?: string;
  props?: Record<string, any>;
  timestamp?: Date;
  userAgent?: string;
  url?: string;
}

export interface DetailedError {
  message: string;
  stack: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  recoverable: boolean;
  suggestions?: string[];
}

class ErrorTracker {
  private errors: DetailedError[] = [];
  private isClient: boolean;

  constructor() {
    this.isClient = typeof window !== 'undefined';
  }

  /**
   * Log a detailed error with context and recovery suggestions
   */
  logError(
    error: Error | string,
    context: ErrorContext = {},
    severity: DetailedError['severity'] = 'medium',
    recoverable: boolean = true
  ): DetailedError {
    const errorMessage = error instanceof Error ? error.message : error;
    const errorStack = error instanceof Error ? error.stack || 'No stack trace available' : 'No stack trace available';
    
    const detailedError: DetailedError = {
      message: errorMessage,
      stack: errorStack,
      context: {
        ...context,
        timestamp: new Date(),
        userAgent: this.isClient ? navigator.userAgent : 'Server',
        url: this.isClient ? window.location.href : 'Server-side'
      },
      severity,
      recoverable,
      suggestions: this.generateSuggestions(errorMessage, context)
    };

    this.errors.push(detailedError);
    
    // Log to console with formatting
    this.logToConsole(detailedError);
    
    // Send to monitoring service in production
    if (this.isClient && severity === 'critical') {
      this.reportToService(detailedError);
    }

    return detailedError;
  }

  /**
   * Generate contextual suggestions for common errors
   */
  private generateSuggestions(message: string, context: ErrorContext): string[] {
    const suggestions: string[] = [];

    if (message.includes('Cannot read properties of undefined')) {
      suggestions.push('Check if the property exists before accessing it');
      suggestions.push('Add optional chaining (?.) or nullish coalescing (??)');
      suggestions.push('Verify data is loaded before rendering component');
    }

    if (message.includes('toISOString')) {
      suggestions.push('Ensure the value is a valid Date object');
      suggestions.push('Add date validation before calling toISOString()');
      suggestions.push('Consider using a safe date formatting function');
    }

    if (message.includes('publishedAt')) {
      suggestions.push('Check if publishedAt exists in your markdown frontmatter');
      suggestions.push('Verify date format in content files');
      suggestions.push('Add default date handling for missing publishedAt');
    }

    if (context.component === 'BlogCard') {
      suggestions.push('Verify all required props are passed to BlogCard');
      suggestions.push('Check content collection schema');
      suggestions.push('Ensure blog posts have valid frontmatter');
    }

    return suggestions;
  }

  /**
   * Format and log error to console with colors and structure
   */
  private logToConsole(error: DetailedError): void {
    const emoji = {
      low: '🟡',
      medium: '🟠', 
      high: '🔴',
      critical: '💀'
    };

    console.group(`${emoji[error.severity]} [${error.severity.toUpperCase()}] ${error.context.component || 'Unknown'}`);
    
    console.error('Message:', error.message);
    
    if (error.context.function) {
      console.log('Function:', error.context.function);
    }
    
    if (error.context.props) {
      console.log('Props:', error.context.props);
    }
    
    console.log('Timestamp:', error.context.timestamp?.toISOString());
    console.log('Recoverable:', error.recoverable);
    
    if (error.suggestions?.length) {
      console.group('💡 Suggestions:');
      error.suggestions.forEach((suggestion, index) => {
        console.log(`${index + 1}. ${suggestion}`);
      });
      console.groupEnd();
    }
    
    console.log('Stack Trace:', error.stack);
    console.groupEnd();
  }

  /**
   * Report critical errors to external service
   */
  private reportToService(error: DetailedError): void {
    // In production, send to your monitoring service
    // For now, just log that we would report it
    console.warn('🚨 Critical error would be reported to monitoring service:', {
      message: error.message,
      component: error.context.component,
      timestamp: error.context.timestamp
    });
  }

  /**
   * Get all errors for debugging
   */
  getErrors(): DetailedError[] {
    return [...this.errors];
  }

  /**
   * Clear error log
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Get errors by severity
   */
  getErrorsBySeverity(severity: DetailedError['severity']): DetailedError[] {
    return this.errors.filter(error => error.severity === severity);
  }
}

// Global error tracker instance
export const errorTracker = new ErrorTracker();

/**
 * Safe function wrapper that catches and logs errors
 */
export function safeExecute<T>(
  fn: () => T,
  context: ErrorContext,
  fallback?: T
): T | undefined {
  try {
    return fn();
  } catch (error) {
    errorTracker.logError(
      error instanceof Error ? error : new Error(String(error)),
      context,
      'medium',
      true
    );
    return fallback;
  }
}

/**
 * Safe async function wrapper
 */
export async function safeExecuteAsync<T>(
  fn: () => Promise<T>,
  context: ErrorContext,
  fallback?: T
): Promise<T | undefined> {
  try {
    return await fn();
  } catch (error) {
    errorTracker.logError(
      error instanceof Error ? error : new Error(String(error)),
      context,
      'medium',
      true
    );
    return fallback;
  }
}

/**
 * Date utilities with error handling
 */
export const SafeDate = {
  format(date: unknown, options: Intl.DateTimeFormatOptions = {}): string {
    return safeExecute(
      () => {
        if (!date) throw new Error('Date is null or undefined');
        
        const dateObj = date instanceof Date ? date : new Date(date as string);
        if (isNaN(dateObj.getTime())) {
          throw new Error(`Invalid date: ${date}`);
        }
        
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          ...options
        }).format(dateObj);
      },
      { component: 'SafeDate', function: 'format', props: { date, options } },
      'Date not available'
    ) || 'Date not available';
  },

  toISOString(date: unknown): string {
    return safeExecute(
      () => {
        if (!date) throw new Error('Date is null or undefined');
        
        const dateObj = date instanceof Date ? date : new Date(date as string);
        if (isNaN(dateObj.getTime())) {
          throw new Error(`Invalid date: ${date}`);
        }
        
        return dateObj.toISOString();
      },
      { component: 'SafeDate', function: 'toISOString', props: { date } },
      new Date().toISOString()
    ) || new Date().toISOString();
  }
};

/**
 * Component prop validation utilities
 */
export const PropValidator = {
  validateBlogPost(props: any): boolean {
    const required = ['title', 'description', 'slug', 'date'];
    const missing = required.filter(prop => !props[prop]);
    
    if (missing.length > 0) {
      errorTracker.logError(
        `Missing required props: ${missing.join(', ')}`,
        { component: 'BlogCard', function: 'validateBlogPost', props },
        'high',
        false
      );
      return false;
    }
    
    return true;
  }
};
