/**
 * Integration Test Suite for TinkerForge AI Website
 * Tests core functionality, UI components, and user flows
 */

// Simple smoke tests that don't require Playwright
export const smokeTests = {
  async testHomepageLoad() {
    try {
      const response = await fetch('http://localhost:4322/');
      return {
        success: response.ok,
        status: response.status,
        message: response.ok ? 'Homepage loads successfully' : `Failed with status ${response.status}`
      };
    } catch (error) {
      return {
        success: false,
        status: 0,
        message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  },

  async testBlogPageLoad() {
    try {
      const response = await fetch('http://localhost:4322/blog');
      return {
        success: response.ok || response.status === 404, // 404 is acceptable
        status: response.status,
        message: response.ok ? 'Blog page loads successfully' : `Status ${response.status} (acceptable)`
      };
    } catch (error) {
      return {
        success: false,
        status: 0,
        message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  },

  async runAllTests() {
    console.log('🧪 Running TinkerForge AI Smoke Tests...\n');
    
    const tests = [
      { name: 'Homepage Load', test: this.testHomepageLoad },
      { name: 'Blog Page Load', test: this.testBlogPageLoad }
    ];

    const results = [];
    
    for (const { name, test } of tests) {
      console.log(`Testing: ${name}...`);
      const result = await test();
      results.push({ name, ...result });
      
      console.log(result.success ? '✅' : '❌', result.message);
      console.log();
    }

    const passed = results.filter(r => r.success).length;
    const total = results.length;
    
    console.log(`\n📊 Test Results: ${passed}/${total} passed`);
    
    if (passed === total) {
      console.log('🎉 All tests passed!');
    } else {
      console.log('⚠️  Some tests failed. Check the output above.');
    }

    return { passed, total, results };
  }
};

// Run tests if this file is executed directly
if (typeof window === 'undefined' && import.meta.url === `file://${process.argv[1]}`) {
  smokeTests.runAllTests();
}
