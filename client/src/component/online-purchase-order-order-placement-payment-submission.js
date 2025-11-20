
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class OnlinePurchaseOrderOrderPlacementPaymentSubmission extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"paymentId","name":"Payment ID","type":"text","required":false,"description":"Unique payment transaction identifier.","label":"Payment ID"},{"id":"orderId","name":"Order ID","type":"text","required":false,"description":"Unique order identifier.","label":"Order ID"},{"id":"method","name":"Payment method","type":"text","required":false,"description":"Payment instrument used (card, UPI, wallet, COD).","label":"Payment method"},{"id":"amount","name":"Amount paid","type":"number","required":false,"description":"Amount captured for the payment.","label":"Amount paid"},{"id":"paymentDate","name":"Payment date","type":"date","required":false,"description":"Date of transaction capture.","label":"Payment date"},{"id":"status","name":"Order status","type":"text","required":false,"description":"Current lifecycle status (Pending / Paid / Shipped / Delivered / Closed).","label":"Order status"}];

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

customElements.define("online-purchase-order-order-placement-payment-submission", OnlinePurchaseOrderOrderPlacementPaymentSubmission);
export default OnlinePurchaseOrderOrderPlacementPaymentSubmission;
