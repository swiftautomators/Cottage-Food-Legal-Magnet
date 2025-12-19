"use strict";

/**
 * Server Action to submit lead data to N8N webhook.
 */
export async function submitLead(formData: { name: string; state: string; email: string; privacy: boolean }) {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
        throw new Error("N8N_WEBHOOK_URL is not configured.");
    }

    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Webhook submission failed:", errorText);
        throw new Error("Failed to submit lead. Please try again later.");
    }

    return { success: true };
}