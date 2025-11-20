
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class OnlinePurchaseOrderOrderPlacementCaptureCustomerCart extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"customerId","name":"Customer ID","type":"text","required":false,"description":"Unique identifier for the customer.","label":"Customer ID"},{"id":"fullName","name":"Full name","type":"text","required":false,"description":"Customer's full name.","label":"Full name"},{"id":"email","name":"Email address","type":"email","required":false,"description":"Primary contact email.","label":"Email address"},{"id":"productId","name":"Product ID","type":"text","required":false,"description":"Unique product identifier or SKU.","label":"Product ID"},{"id":"sku","name":"SKU","type":"text","required":false,"description":"Stock keeping unit.","label":"SKU"},{"id":"price","name":"Price","type":"number","required":false,"description":"Retail price for the SKU.","label":"Price"},{"id":"totalAmount","name":"Total amount","type":"number","required":false,"description":"Order total payable amount.","label":"Total amount"},{"id":"shippingAddress","name":"Shipping address","type":"text","required":false,"description":"Final shipping address for the order.","label":"Shipping address"}];

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

customElements.define("online-purchase-order-order-placement-capture-customer-cart", OnlinePurchaseOrderOrderPlacementCaptureCustomerCart);
export default OnlinePurchaseOrderOrderPlacementCaptureCustomerCart;
