
export interface LegalData {
    state: string;
    cap: string;
    refrigeration: string;
    labels: string;
    privacy: string;
}

export const STATE_LEGAL_DATA: Record<string, LegalData> = {
    "Texas": {
        state: "Texas",
        cap: "$150,000",
        refrigeration: "Now allows some refrigerated items (SB 541)",
        labels: "Registration ID allowed instead of home address",
        privacy: "Highly Protected"
    },
    "Florida": {
        state: "Florida",
        cap: "$250,000",
        refrigeration: "Dry goods only (No TCS)",
        labels: "Physical address mandatory on labels",
        privacy: "Standard"
    },
    "California": {
        state: "California",
        cap: "$150k (Class A) / $300k (Class B)",
        refrigeration: "Shelf-stable only",
        labels: "Registration Number permitted",
        privacy: "Moderate"
    },
    "Georgia": {
        state: "Georgia",
        cap: "No fixed cap (Unlimited)",
        refrigeration: "Non-TCS only",
        labels: "Physical address required",
        privacy: "Public record"
    },
    "Other": {
        state: "General 2025",
        cap: "Varies by State",
        refrigeration: "Increasingly flexible",
        labels: "Shifting to ID-based labels",
        privacy: "Evolving"
    }
};

export const STATES_LIST = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
];