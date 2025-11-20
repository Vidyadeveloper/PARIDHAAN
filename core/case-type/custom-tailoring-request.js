const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class CustomTailoringRequestCase extends BlazeCase {
  constructor() {
    super(
      "custom-tailoring-request",
      "Custom Tailoring Request",
      [
{
      id: "Request_&_Design",
      label: "Request & Design",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "custom-tailoring-request-request-&-design-start",
          dataModelReference: { models: [] }
        },
{
          id: "tailor.request.submit",
          label: "Submit request & measurements",
          type: "manual",
          status: "pending",
          view: "custom-tailoring-request-request-&-design-submit-request-&-measurements",
          dataModelReference: { models: ["requestId", "customerIdRef", "designReference", "measurements", "agreedPrice"] },
          routingConfig:           {
            "routeTo": "CurrentUser"
          }
        },
{
          id: "tailor.request.confirm",
          label: "Design confirmation & quote",
          type: "manual",
          status: "pending",
          view: "custom-tailoring-request-request-&-design-design-confirmation-&-quote",
          dataModelReference: { models: ["requestId", "agreedPrice", "status"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "custom-tailoring-request-request-&-design-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Production_&_Fitting",
      label: "Production & Fitting",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "custom-tailoring-request-production-&-fitting-start",
          dataModelReference: { models: [] }
        },
{
          id: "tailor.production.start",
          label: "Start production",
          type: "manual",
          status: "pending",
          view: "custom-tailoring-request-production-&-fitting-start-production",
          dataModelReference: { models: ["requestId", "estimatedCompletionDate", "status"] }
        },
{
          id: "tailor.fitting.schedule",
          label: "Schedule fitting appointment",
          type: "manual",
          status: "pending",
          view: "custom-tailoring-request-production-&-fitting-schedule-fitting-appointment",
          dataModelReference: { models: ["appointmentId", "staffIdRef", "appointmentDate", "notes"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "custom-tailoring-request-production-&-fitting-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Delivery_&_Closure",
      label: "Delivery & Closure",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "custom-tailoring-request-delivery-&-closure-start",
          dataModelReference: { models: [] }
        },
{
          id: "tailor.delivery.complete",
          label: "Finalize delivery & accept",
          type: "manual",
          status: "pending",
          view: "custom-tailoring-request-delivery-&-closure-finalize-delivery-&-accept",
          dataModelReference: { models: ["requestId", "status", "customerIdRef"] }
        },
{
          id: "tailor.feedback.capture",
          label: "Capture feedback / minor alterations",
          type: "manual",
          status: "pending",
          view: "custom-tailoring-request-delivery-&-closure-capture-feedback-/-minor-alterations",
          dataModelReference: { models: ["requestId", "notes", "status"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "custom-tailoring-request-delivery-&-closure-end",
          dataModelReference: { models: [] }
        }
      ]
    }
      ]
    );
  }
}

module.exports = new CustomTailoringRequestCase();