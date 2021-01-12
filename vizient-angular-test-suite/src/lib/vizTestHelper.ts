import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement, Type} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Moment} from 'moment';

export class VizTestHelper<T> {

  constructor(component: Type<T>) {
    this.fixture = TestBed.createComponent(component);
    this.fixture.detectChanges();
  }

  readonly fixture: ComponentFixture<T>;

  private static asNativeElement(element: DebugElement | any): any {
    let e: any = element;

    if (element instanceof DebugElement) {
      e = (element as DebugElement).nativeElement;
    }

    return e;
  }

  /**
   * @description Returns component instance.
   */
  getComponent(): any {
    return this.fixture.componentInstance;
  }

  /**
   * @description Detect changes and updates fixture accordingly.
   */
  detectChanges(): VizTestHelper<T> {
    this.fixture.detectChanges();
    return this;
  }

  /**
   * @description Expects element with provided class(es) to exist.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementToHaveClass(cssSelector: string, ...withClasses: string[]): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    if (!!result) {
      this.expectClassPresent(result, ...withClasses);
    }
    return this;
  }

  /**
   * @description Expects element at provided index with provided class(es) to exist.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementToHaveClassAtIndex(cssSelector: string, index: number, ...withClasses: string[]): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.queryAll(By.css(cssSelector))[index];
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    if (!!result) {
      this.expectClassPresent(result, ...withClasses);
    }
    return this;
  }

  /**
   * @description Expects element with provided class(es) to NOT exist.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param withClasses - Class(es) expected to NOT be present on element.
   */
  expectElementWithoutClass(cssSelector: string, ...withClasses: string[]): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    if (!!result) {
      this.expectClassAbsent(result, ...withClasses);
    }
    return this;
  }

  /**
   * @description Expects element with provided class(es) to NOT exist at provided index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   * @param withClasses - Class(es) expected to NOT be present on element.
   */
  expectElementWithoutClassAtIndex(cssSelector: string, index: number, ...withClasses: string[]): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector))[index];
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    if (!!result) {
      this.expectClassAbsent(result, ...withClasses);
    }
    return this;
  }

  /**
   * @description Expects element to be hidden inside DOM.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   */
  expectElementHidden(cssSelector: string): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    const e: any = VizTestHelper.asNativeElement(result);
    expect(e.getAttribute('hidden')).toEqual('', 'Element was not hidden');
    return this;
  }

  /**
   * @description Expects element to be hidden from DOM.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   */
  expectElementHiddenFromDom(cssSelector: string): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was not hidden but it should be hidden');

    if (window.getComputedStyle(result.nativeElement).visibility !== 'hidden') {
      expect(false).toBeTruthy('Expected element to be hidden, but it was visible.');
    }
    return this;
  }

  /**
   * @description Expects element to exist.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementPresent(cssSelector: string, ...withClasses: string[]): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    if (!!result && withClasses.length > 0) {
      this.expectOnlyClasses(result, ...withClasses);
    }
    return this;
  }

  /**
   * @description Expects element to exist at provided index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementPresentAtIndex(cssSelector: string, index: number, ...withClasses: string[]): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.queryAll(By.css(cssSelector))[index];
    expect(result).not.toBeUndefined('"' + cssSelector + '"[' + index + '] element was absent but it should be present');

    if (!!result && withClasses.length > 0) {
      this.expectOnlyClasses(result, ...withClasses);
    }
    return this;
  }

  /**
   * @description Expects element to NOT exist.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   */
  expectElementAbsent(cssSelector: string): VizTestHelper<T> {
    expect(this.fixture.debugElement.queryAll(By.css(cssSelector)).length)
      .not.toBeGreaterThan(0, '"' + cssSelector + '" element was present but it should be absent');
    return this;
  }

  /**
   * @description Expects element to NOT exist at provided index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   */
  expectElementAbsentAtIndex(cssSelector: string, index: number): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.queryAll(By.css(cssSelector))[index];
    expect(!!result).toBeFalsy('"' + cssSelector + '"[' + index + '] element was present but it should be absent');
    return this;
  }

  /**
   * @description Expects element to be disabled.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   */
  expectElementDisabled(cssSelector: string): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    const e: any = VizTestHelper.asNativeElement(result);
    expect(e.getAttribute('disabled')).not.toBeNull('"' + cssSelector + '] element was not disabled');
    return this;
  }

  /**
   * @description Expects element to be disabled at provided index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   */
  expectElementDisabledAtIndex(cssSelector: string, index: number): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.queryAll(By.css(cssSelector))[index];
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    const e: any = VizTestHelper.asNativeElement(result);
    expect(e.getAttribute('disabled')).not.toBeNull('"' + cssSelector + '"[' + index + '] element was not disabled');
    return this;
  }

  /**
   * @description Expects element to be enabled.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   */
  expectElementEnabled(cssSelector: string): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    const e: any = VizTestHelper.asNativeElement(result);
    expect(e.getAttribute('disabled')).toBeNull('Element was not enabled');
    return this;
  }

  /**
   * @description Expects element to be enabled at provided index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   */
  expectElementEnabledAtIndex(cssSelector: string, index: number): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.queryAll(By.css(cssSelector))[index];
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    const e: any = VizTestHelper.asNativeElement(result);
    expect(e.getAttribute('disabled')).toBeNull('Element was not enabled');
    return this;
  }

  /**
   * @description Expects element value to match provided value.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param value - Expected element value.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementToHaveValue(
    cssSelector: string,
    value: string,
    ...withClasses: string[]
  ): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    if (!!result) {
      expect(result.nativeElement.value.trim()).toEqual(value);

      if (withClasses.length > 0) {
        this.expectOnlyClasses(result, ...withClasses);
      }
    }
    return this;
  }

  /**
   * @description Expects element content to match provided content.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param content - Content expected to match element content.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementToHaveContent(
    cssSelector: string,
    content: string,
    ...withClasses: string[]
  ): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    if (!!result) {
      expect(result.nativeElement.textContent.trim()).toEqual(content);

      if (withClasses.length > 0) {
        this.expectOnlyClasses(result, ...withClasses);
      }
    }
    return this;
  }

  /**
   * @description Expects element content to match provided content at provided index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   * @param content - Content expected to match element content.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementToHaveContentAtIndex(
    cssSelector: string,
    index: number,
    content: string,
    ...withClasses: string[]
  ): VizTestHelper<T> {
    const result: DebugElement = this.fixture.debugElement.queryAll(By.css(cssSelector))[index];
    expect(result).not.toBeUndefined('"' + cssSelector + '"[' + index + '] element was absent but it should be present');

    if (!!result) {
      expect(result.nativeElement.textContent.trim()).toEqual(content);

      if (withClasses.length > 0) {
        this.expectOnlyClasses(result, ...withClasses);
      }
    }
    return this;
  }

  /**
   * @description Expects element to contain provided content.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param content - Content expected to be contained inside element content.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementToContainContent(
    cssSelector: string,
    content: string,
    ...withClasses: string[]
  ): VizTestHelper<T> {
    // Use "with value" when verifying the content inside of input elements
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    if (!!result) {
      const value = result.nativeElement.textContent.trim().replace(/\s+/g, ' ');
      if (value === '' && content === '') {
        expect(value).toEqual(content);
      } else {
        expect(value).toContain(content, 'Failed to match content for "' + cssSelector + '"');
      }

      if (withClasses.length > 0) {
        this.expectOnlyClasses(result, ...withClasses);
      }
    }
    return this;
  }

  /**
   * @description Expects element to contain provided content at provided index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   * @param content - Content expected to be contained inside element content
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementToContainContentAtIndex(
    cssSelector: string,
    index: number,
    content: string,
    ...withClasses: string[]
  ): VizTestHelper<T> {
    // Use "with value" when verifying the content inside of input elements
    const result: DebugElement = this.fixture.debugElement.queryAll(By.css(cssSelector))[index];
    expect(result).not.toBeUndefined('"' + cssSelector + '"[' + index + '] element was absent but it should be present');

    if (!!result) {
      const value = result.nativeElement.textContent.trim().replace(/\s+/g, ' ');
      if (value === '' && content === '') {
        expect(value).toEqual(content);
      } else {
        expect(value).toContain(content, 'Failed to match content for "' + cssSelector + '"');
      }

      if (withClasses.length > 0) {
        this.expectOnlyClasses(result, ...withClasses);
      }
    }
    return this;
  }

  /**
   * @description Expects element to NOT contain any content.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementToNotContainAnyContent(cssSelector: string, ...withClasses: string[]): VizTestHelper<T> {
    // Use "with value" when verifying the content inside of input elements
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    if (!!result) {
      expect(result.nativeElement.textContent.trim()).toEqual('');

      if (withClasses.length > 0) {
        this.expectOnlyClasses(result, ...withClasses);
      }
    }
    return this;
  }

  /**
   * @description Expects element to have provided value.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param content - Expected element content.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementWithValue(
    cssSelector: string,
    content: string,
    ...withClasses: string[]
  ): VizTestHelper<T> {
    // Use "with value" when verifying the content inside of input elements
    const result: DebugElement = this.fixture.debugElement.query(By.css(cssSelector));
    expect(result).not.toBeNull('"' + cssSelector + '" element was absent but it should be present');

    if (!!result) {
      const v = !!result.nativeElement.value ? result.nativeElement.value : '';
      const value = v.trim().replace(/\s+/g, ' ');

      if (value === '' && content === '') {
        expect(value).toEqual(content);
      } else {
        expect(value).toContain(content, 'Failed to match content for "' + cssSelector + '"');
      }

      if (withClasses.length > 0) {
        this.expectOnlyClasses(result, ...withClasses);
      }
    }
    return this;
  }

  /**
   * @description Expects element to have provided value at specific index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   * @param content - Expected element content.
   * @param withClasses - Additional class(es) to help find specific element.
   */
  expectElementWithValueAtIndex(
    cssSelector: string,
    index: number,
    content: string,
    ...withClasses: string[]
  ): VizTestHelper<T> {
    // Use "with value" when verifying the content inside of input elements
    const result: DebugElement = this.fixture.debugElement.queryAll(By.css(cssSelector))[index];
    expect(result).not.toBeUndefined('"' + cssSelector + '"[' + index + '] element was absent but it should be present');

    if (!!result) {
      expect(result.nativeElement.value.trim().replace(/\s+/g, ' ')).toEqual(content);

      if (withClasses.length > 0) {
        this.expectOnlyClasses(result, ...withClasses);
      }
    }
    return this;
  }

  /**
   * @description Expects element to have parent child relationship.
   * @param parentCssSelector - Parent class, id, or element that will searched for inside the DOM.
   * @param firstChildCssSelector - First child class, id, or element that will searched for inside the DOM.
   * @param firstChildIndex - Expected position of first child inside of the DOM.
   * @param secondChildCssSelector - Second child class, id, or element that will searched for inside the DOM.
   * @param secondChildIndex - Expected position of second child inside of the DOM.
   */
  expectElementRelativeTo(
    parentCssSelector: string,
    firstChildCssSelector: string,
    firstChildIndex: number,
    secondChildCssSelector: string,
    secondChildIndex: number
  ): VizTestHelper<T> {
    const parentElement = this.fixture.debugElement.query(By.css(parentCssSelector));
    const firstRelativeChild = parentElement.queryAll(By.css(firstChildCssSelector))[firstChildIndex];
    const secondRelativeChild = parentElement.queryAll(By.css(secondChildCssSelector))[secondChildIndex];

    const firstChildPosition = parentElement.children.indexOf(firstRelativeChild);
    const secondChildPosition = parentElement.children.indexOf(secondRelativeChild);

    expect(firstChildPosition).toBeGreaterThanOrEqual(
      0,
      '"' + firstChildCssSelector + '"[' + firstChildIndex + '] element was not found as a child of ' + '"' + parentCssSelector + '"'
    );
    expect(secondChildPosition).toBeGreaterThanOrEqual(
      0,
      '"' + secondChildCssSelector + '"[' + secondChildIndex + '] element was not found as a child of ' + '"' + parentCssSelector + '"'
    );
    expect(secondChildPosition - firstChildPosition).toBe(
      1,
      '"' + secondChildCssSelector + '" element is not positioned directly after ' + '"' + firstChildCssSelector + '"'
    );
    return this;
  }

  /**
   * @description Expects element to have provided properties.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param expectedBindings - Expected Angular bindings.
   * @param debug - Optionally console log debug messages.
   */
  expectElementProperties(
    cssSelector: string,
    expectedBindings: any,
    debug?: boolean
  ): VizTestHelper<T> {
    this.expectElementPresent(cssSelector);
    // Property == Anything that angular touches such as [disabled]="function()" or href="some/url/{{boundValue}}"

    // This is doing manual object comparison because jasmine's expect().toEqual() will not
    // output error messages, so to have a real error message we have to get creative
    const props = this.fixture.debugElement.query(By.css(cssSelector)).properties;
    this.matchElementViaReflection(props, expectedBindings, debug);
    return this;
  }

  /**
   * @description Expects element to have provided properties at provided index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   * @param expectedBindings - Expected Angular bindings.
   * @param debug - Optionally console log debug messages.
   */
  expectElementPropertiesAtIndex(
    cssSelector: string,
    index: number,
    expectedBindings: any,
    debug?: boolean
  ): VizTestHelper<T> {
    this.expectElementPresentAtIndex(cssSelector, index);
    // Property == Anything that angular touches such as [disabled]="function()" or href="some/url/{{boundValue}}"

    // This is doing manual object comparison because jasmine's expect().toEqual() will not
    // output error messages, so to have a real error message we have to get creative
    const props = this.fixture.debugElement.queryAll(By.css(cssSelector))[index].properties;
    this.matchElementViaReflection(props, expectedBindings, debug, index);
    return this;
  }

  /**
   * @description Expects element to have provided attributes.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param expectedBindings - Expected raw HTML attributes.
   * @param debug - Optionally console log debug messages.
   */
  expectElementAttributes(
    cssSelector: string,
    expectedBindings: any,
    debug?: boolean
  ): VizTestHelper<T> {
    this.expectElementPresent(cssSelector);
    // Attribute == Anything that is raw HTML such as disabled="true" or href="some/url/123" or bound via [attr.x]="'some' + value"

    // This is doing manual object comparison because jasmine's expect().toEqual() will not
    // output error messages, so to have a real error message we have to get creative
    const attrs = this.fixture.debugElement.query(By.css(cssSelector)).attributes;
    this.matchElementViaReflection(attrs, expectedBindings, debug);
    return this;
  }

  /**
   * @description Expects element to have provided attributes at provided index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   * @param expectedBindings - Expected raw HTML attributes.
   * @param debug - Optionally console log debug messages.
   */
  expectElementAttributesAtIndex(
    cssSelector: string,
    index: number,
    expectedBindings: any,
    debug?: boolean
  ): VizTestHelper<T> {
    this.expectElementPresentAtIndex(cssSelector, index);
    // Attribute == Anything that is raw HTML such as disabled="true" or href="some/url/123" or bound via [attr.x]="'some' + value"

    // This is doing manual object comparison because jasmine's expect().toEqual() will not
    // output error messages, so to have a real error message we have to get creative
    const attrs = this.fixture.debugElement.queryAll(By.css(cssSelector))[index].attributes;
    this.matchElementViaReflection(attrs, expectedBindings, debug, index);
    return this;
  }

  /**
   * @description Expects provided values to be equal.
   * @param value - Value to be tested.
   * @param expectedValue - Expected value.
   * @param errorMessage - Error message to be thrown if values are not equal.
   */
  expectEqual(value: any, expectedValue: any, errorMessage: string): VizTestHelper<T> {
    const v = this.toMatchingString(value);
    const e = this.toMatchingString(expectedValue);

    expect((v === e || value === expectedValue) && value !== undefined && expectedValue !== undefined)
      .toBeTruthy(errorMessage.replace('$value', v).replace('$expected', e));
    return this;
  }

  /**
   * @description Expects provided URL search params to be equal.
   * @param expected - Expected value of URLSearchParams.
   * @param actual - URLSearchParam to be tested.
   */
  areURLSearchParamsEqual(expected: URLSearchParams, actual: URLSearchParams): boolean {
    return actual.toString() === expected.toString();
  }

  /**
   * @description Expects provided days to be equal.
   * @param a - Moment (day) to be tested.
   * @param b - Expected Moment (day).
   */
  expectDayEqual(a: Moment, b: Moment): VizTestHelper<T> {
    if (a && b) {
      expect(a.format('YYYY-MM-DD')).toEqual(b.format('YYYY-MM-DD'));
    } else if (!a) {
      fail(a + ' is not a valid moment');
    } else if (!b) {
      fail(b + ' is not a valid moment');
    }
    return this;
  }

  /**
   * @description Expects provided days to NOT be equal.
   * @param a - Moment (day) to be tested.
   * @param b - Expected Moment (day).
   */
  expectDayNotEqual(a: Moment, b: Moment): VizTestHelper<T> {
    if (a && b) {
      expect(a.format('YYYY-MM-DD')).not.toEqual(b.format('YYYY-MM-DD'));
    } else if (!a) {
      fail(a + ' is not a valid moment');
    } else if (!b) {
      fail(b + ' is not a valid moment');
    }
    return this;
  }

  /**
   * @description Expects provided times to be equal.
   * @param a - Moment (time) to be tested.
   * @param b - Expected Moment (time).
   */
  expectTimeEqual(a: Moment, b: Moment): VizTestHelper<T> {
    if (a && b) {
      expect(a.toISOString()).toEqual(b.toISOString());
    } else if (!a) {
      fail(a + ' is not a valid moment');
    } else if (!b) {
      fail(b + ' is not a valid moment');
    }
    return this;
  }

  /**
   * @description Triggers provided event on provided element.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param event - Element event to be triggered.
   * @param eventArgs - Optional event arguments.
   */
  triggerEventOnElement(cssSelector: string, event: string, eventArgs?: any): VizTestHelper<T> {
    this.expectElementPresent(cssSelector);
    this.fixture.debugElement.query(By.css(cssSelector)).triggerEventHandler(event, eventArgs);
    this.fixture.detectChanges();
    return this;
  }

  /**
   * @description Triggers provided event on provided element at specific index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param index - Expected position inside of the DOM.
   * @param event - Element event to be triggered.
   * @param eventArgs - Optional event arguments.
   */
  triggerEventOnElementAtIndex(
    cssSelector: string,
    index: number,
    event: string,
    eventArgs?: any
  ): VizTestHelper<T> {
    this.expectElementPresentAtIndex(cssSelector, index);
    this.fixture.debugElement.queryAll(By.css(cssSelector))[index].triggerEventHandler(event, eventArgs);
    this.fixture.detectChanges();
    return this;
  }

  /**
   * @description Fills input element with provided content.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param content - Content to fill input.
   */
  fillInput(cssSelector: string, content: string): VizTestHelper<T> {
    this.expectElementPresent(cssSelector);
    const inputElement = this.fixture.debugElement.query(By.css(cssSelector)).nativeElement;
    inputElement.click();
    inputElement.value = content;
    inputElement.dispatchEvent(new Event('input'));
    this.triggerEventOnElement(cssSelector, 'blur');
    this.fixture.detectChanges();
    return this;
  }

  /**
   * @description Fills input element with provided content at specific index.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param content - Content to fill input.
   * @param index - Expected position inside of the DOM.
   */
  fillInputAtIndex(cssSelector: string, content: string, index: number): VizTestHelper<T> {
    this.expectElementPresentAtIndex(cssSelector, index);
    const inputElement = this.fixture.debugElement.queryAll(By.css(cssSelector))[index].nativeElement;
    inputElement.click();
    inputElement.value = content;
    inputElement.dispatchEvent(new Event('input'));
    this.triggerEventOnElement(cssSelector, 'blur');
    this.fixture.detectChanges();
    return this;
  }

  /**
   * @description Return values from provided element.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   */
  getValues(cssSelector: string): Array<string> {
    const inputElements = this.fixture.debugElement.queryAll(By.css(cssSelector));
    const result: Array<string> = [];
    inputElements.forEach(x => {
      result.push(x.nativeElement.value);
    });
    return result;
  }

  /**
   * @description Clicks provided element.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   */
  click(cssSelector: string): VizTestHelper<T> {
    this.expectElementPresent(cssSelector);
    this.fixture.debugElement.query(By.css(cssSelector)).nativeElement.click();
    this.fixture.detectChanges();
    return this;
  }

  /**
   * @description Clicks first occurrence of the provided element.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   */
  clickFirst(cssSelector: string): VizTestHelper<T> {
    this.expectElementPresentAtIndex(cssSelector, 0);
    this.fixture.debugElement.queryAll(By.css(cssSelector))[0].nativeElement.click();
    this.fixture.detectChanges();
    return this;
  }

  /**
   * @description Clicks Nth occurrence of the provided element.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   * @param nth - Selects which occurrence should be clicked.
   */
  clickNth(cssSelector: string, nth: number): VizTestHelper<T> {
    this.expectElementPresentAtIndex(cssSelector, nth);
    const debugElements = this.fixture.debugElement.queryAll(By.css(cssSelector));
    debugElements[nth].nativeElement.click();
    this.fixture.detectChanges();
    return this;
  }

  /**
   * @description Clicks last occurrence of the provided element.
   * @param cssSelector - Name of class, id, or element that will be searched for inside of the DOM.
   */
  clickLast(cssSelector: string): VizTestHelper<T> {
    const elements = this.fixture.debugElement.queryAll(By.css(cssSelector));
    const index = elements.length - 1;
    expect(index).toBeGreaterThan(-1, '"' + cssSelector + '" element was absent but it should be present');
    elements[index].nativeElement.click();
    this.fixture.detectChanges();
    return this;
  }

  private toMatchingString(value: any): string {
    if (value) {
      try {
        return JSON.stringify(value);
      } catch {
        return value.toString();
      }
    }
    return value;
  }

  private matchElementViaReflection(
    reflectedProperties: { [key: string]: any; },
    expectedBindings: any,
    debug?: boolean,
    index?: number
  ): VizTestHelper<T> {
    const propNames = Object.getOwnPropertyNames(expectedBindings);
    if (debug) {
      console.log(JSON.stringify(reflectedProperties), JSON.stringify(propNames));
    }

    propNames.forEach((propName) => {
      // for (let i = 0; i < propNames.length; i++){
      // const propName = propNames[i];
      const value = reflectedProperties[propName];
      const expectedValue = expectedBindings[propName];
      if (debug) {
        console.log(`Matching for prop ${propName}`, value, expectedValue);
      }

      let msg = 'Expected "' + propName + '" with value "$value" to equal "$expected"';
      if (!!index) {
        msg += ' at index' + index;
      }

      this.expectEqual(value, expectedValue, msg);
    });
    return this;
  }

  private expectClassPresent(element: DebugElement | any, ...classes: string[]): void {
    const e: any = VizTestHelper.asNativeElement(element);
    const classNames = e.className.split(' ');
    classes.forEach(x => {
      expect(classNames).toContain(x, 'Element does not have class "' + x + '" present');
    });
  }

  private expectOnlyClasses(element: DebugElement | any, ...classes: string[]): void {
    const e: any = VizTestHelper.asNativeElement(element);
    const classNames = e.className.split(' ').filter(x => !x.startsWith('ng-'));
    classes.forEach(x => {
      expect(classNames).toContain(x, 'Element does not have class "' + x + '" present');
    });
    classNames.forEach(x => {
      expect(classes).toContain(x, 'Element has class "' + x + '" present and should not');
    });
  }

  private expectClassAbsent(element: DebugElement | any, ...classes: string[]): void {
    const e: any = VizTestHelper.asNativeElement(element);
    const classNames = e.className.split(' ');
    classes.forEach(x => {
      expect(classNames).not.toContain(x, 'Element has class "' + x + '" present when it should not');
    });
  }

}
