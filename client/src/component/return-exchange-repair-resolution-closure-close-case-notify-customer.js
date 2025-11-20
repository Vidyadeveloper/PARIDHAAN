
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ReturnExchangeRepairResolutionClosureCloseCaseNotifyCustomer extends DynamicHtmlElement {
   constructor() {
    super();
  }


  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-data" context="data"></blaze-field-group>
      
    `;

    
      const fgdata = this.shadowRoot.getElementById("fg-data");
      fgdata.context = "data";
      fgdata.model = {};
      
    
          // 1️⃣ Render fields immediately with default labels
    fgdata.fields = [{"id":"returnId","name":"Return ID","type":"text","required":false,"description":"Unique return/exchange case identifier.","label":"Return ID"},{"id":"status","name":"Order status","type":"text","required":false,"description":"Current lifecycle status (Pending / Paid / Shipped / Delivered / Closed).","label":"Order status"},{"id":"orderIdRef","name":"Order reference","type":"text","required":false,"description":"Associated order identifier.","label":"Order reference"}];

    // 2️⃣ Apply translations later (if available)
    this.updateFieldLabels();
      
      fgdata.data = { "data": this._formData.data || {} };
   

  }

  populateForm() {
    
    const fgdata = this.shadowRoot?.getElementById("fg-data");
    if (fgdata) {
      fgdata.data = { "data": this._formData["data"] || {} };
    }
  
  }
}

customElements.define("return-exchange-repair-resolution-closure-close-case-notify-customer", ReturnExchangeRepairResolutionClosureCloseCaseNotifyCustomer);
export default ReturnExchangeRepairResolutionClosureCloseCaseNotifyCustomer;
