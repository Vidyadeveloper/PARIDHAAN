
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class InStoreAppointmentBookingAppointmentCompleteAppointmentNextSteps extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"appointmentId","name":"Appointment ID","type":"text","required":false,"description":"Unique identifier for the appointment.","label":"Appointment ID"},{"id":"status","name":"Order status","type":"text","required":false,"description":"Current lifecycle status (Pending / Paid / Shipped / Delivered / Closed).","label":"Order status"},{"id":"staffIdRef","name":"Staff reference","type":"text","required":false,"description":"Assigned stylist / tailor.","label":"Staff reference"}];

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

customElements.define("in-store-appointment-booking-appointment-complete-appointment-next-steps", InStoreAppointmentBookingAppointmentCompleteAppointmentNextSteps);
export default InStoreAppointmentBookingAppointmentCompleteAppointmentNextSteps;
