# VizientAngularTestSuite

VizientAngularTestSuite or VATS, is an Angular library that was created to make test driven development with Angular
easier.

VATS has two main components:

- VizTestHelper
  - Contains all helpers that test and interact with the DOM.
- VizMockData
  - Contains helpers that generate random strings, numbers, dates, etc.

## Contributions

Pull requests are welcome. For feedback or requests, please email the Avengers team at AvengersAppDev@vizientinc.com
with any contributions or feedback.

## Installation

### Step 1:

Create a file called .npmrc in your application at the same level as your package.json file and put the following lines
of code in it. This allows you to use NPM and Artifactory as NPM registries.

```bash
@polymer:registry=<url register A>
registry=https://artifacts.vizientinc.com/api/npm/npm
```

### Step 2:

Install VATS

```bash
npm install vizient-angular-test-suite --save-dev
```

### Step 3:

VATS uses Momentjs for the time based test helpers.

```bash
npm install moment
```

## Usage example

```typescript
import { async, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { VizTestHelper, VizMockData } from 'vizient-angular-test-suite';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let testHelper: VizTestHelper<SidebarComponent>;
  let mockData: VizMockData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    mockData = new VizMockData();
    testHelper = new VizTestHelper<AppComponent>(AppComponent);
    component = testHelper.getComponent();
    testHelper.detectChanges();
  });

  describe('VizTestHelper', () => {
    it('first paragraph should contain "sidebar works!"', () => {
      testHelper.expectElementToHaveContentAtIndex('p', 0, 'sidebar works!');
    });
  });

  describe('VizMockData', () => {
    it('should create random strings of provided length', () => {
      const stringOne = mockData.nextString(10); // ex: 'xQNSMCnvPy'

      expect(typeof stringOne).toEqual('string');
      expect(stringOne.length).toEqual(10);
    });
  });
});
```

## Legacy

Initial versions of project specific test helpers are stored in the projects/legacy-test-helpers folder inside the VATS
repository.
