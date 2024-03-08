document.addEventListener("alpine:init", () => {
  Alpine.data("combobox", () => ({
    /**
     * array ; []
     * Options to be shown
     */
    options: [],
    /**
     * array ; []
     * An array of the initial selected values
     */
    items: [],
    /**
     * boolean | function ; false
     * Create a new item
     * create: function(input){
     *     return {value:input,text:input}
     * }
     * create: function(input,callback){
     *     callback({value:input,text:input});
     * }
     */
    create: false,
    /**
     * boolean; false
     * Create a new item on blur
     */
    createOnBlur: false,
    /**
     * RegExp|string|function; null
     * Specifies a RegExp or a string containing a regular expression 
     * that the current search filter must match to be allowed to be 
     * created. May also be a predicate function that takes the filter 
     * text and returns whether it is allowed.
     */
    createFilter: null,
    /**
     * string; ','
     * Delimiter for multiple values to create
     */
    delimiter: ",",
    /** 
     * boolean; false
     * Highlight matches
    */
    highlight: false,
    /**
     * boolean; true
     * Persist the created value if this is unselected
     */
    persist: true,
    /**
     * boolean; true
     * Open the dropdown on focus
     */
    openOnFocus: true,
    /**
     * number; 50
     * Maximum number of options to show, null = unlimited
     */
    maxOptions: 50,
    /** 
     * number; null
     * Maximum number of items to allow to select; 1 = single, null = unlimited
    */
    maxItems: null,
    /** 
     * boolean; null (true in multiselect mode, false in singleselect mode)
     * Hide selected values in the dropdown (true in multiselect mode, false in singleselect mode)
    */
    hideSelected: null,
    /** 
     * boolean; undefined (false in multiselect mode, true in singleselect mode)
     * Close the dropdown after selecting an option
    */
    closeAfterSelect: undefined,
    /**
     * boolean; false
     * Allow an empty option
     */
    allowEmptyOption: false,
    /** 
     * number; 300
     * Throttle time in milliseconds to wait before searching
    */
    loadThrottle: 300,
    /** 
     * string; 'loading'
     * Class to apply to the loading element
    */
    loadingClass: 'loading',
    /**
     * string; undefined
     * Placeholder string
     */
    placeholder: undefined,
    /**
     * boolean; null (false when multiselect mode, true when singleselect mode)
     * Hide the placeholder when the control has not focus and one or more selected items
     */
    hidePlaceholder: null,
    /**
     * boolean|string; false
     * If true, the load function will be called upon control initialization 
     * (with an empty search). Alternatively it can be set to 'focus' to call 
     * the load function when control receives focus.
     */
    preload: false,
    /**
     * string; null
     * Parent element to append the dropdown
     */
    dropdownParent: null,
    /**
     * boolean; false
     * Add precedence to the search; If true, the "Add..." 
     * option is the default selection in the dropdown.
     */
    addPrecedence: false,
    /** 
     * boolean; false
     * Select on tab
    */
    selectOnTab: false,

  }));
});
