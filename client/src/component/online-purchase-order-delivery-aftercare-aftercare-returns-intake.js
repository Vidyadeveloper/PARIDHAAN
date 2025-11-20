
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class OnlinePurchaseOrderDeliveryAftercareAftercareReturnsIntake extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"orderId","name":"Order ID","type":"text","required":false,"description":"Unique order identifier.","label":"Order ID"},{"id":"customerIdRef","name":"Customer reference","type":"text","required":false,"description":"Reference to the placing customer.","label":"Customer reference"},{"id":"returnId","name":"Return ID","type":"text","required":false,"description":"Unique return/exchange case identifier.","label":"Return ID"}];

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

customElements.define("online-purchase-order-delivery-aftercare-aftercare-returns-intake", OnlinePurchaseOrderDeliveryAftercareAftercareReturnsIntake);
export default OnlinePurchaseOrderDeliveryAftercareAftercareReturnsIntake;
