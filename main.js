document.addEventListener("alpine:init", () => {
  Alpine.data("combobox", () => ({
    /**
     * array ; []
     * Options to be shown
     */
    options: [
      { value: "opt1", text: "Option 1" },
      { value: "opt2", text: "Option 2" },
      { value: "opt3", text: "Option 3" },
    ],
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
     * string; undefined
     * Placeholder string
     */
    placeholder: undefined,
    /**
     * boolean; null (false when multiselect mode, true when singleselect mode)
     * Hide the placeholder when the control has not focus and one or more selected items
     */
    hidePlaceholder: null,
    
    init() {
        if (this.hideSelected === undefined){
            this.hideSelected =  maxItems != 1 ;
        }
        if (this.closeAfterSelect === undefined){
            this.closeAfterSelect = maxItems == 1;
        }
        if (this.placeholder === undefined){
            this.placeholder = "Select an option";
        }
        if (this.hidePlaceholder === null){
            this.hidePlaceholder = maxItems == 1;
        }
    },
  }));
});
