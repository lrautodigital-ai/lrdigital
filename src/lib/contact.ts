// Preencha estes campos quando os canais oficiais da LR Digital estiverem definidos.
// Enquanto estiverem vazios, o site evita publicar links falsos de WhatsApp/redes sociais.
export const WHATSAPP_URL = "";
export const CONTACT_EMAIL = "";
export const INSTAGRAM_URL = "";
export const LINKEDIN_URL = "";
export const COMPANY_NAME = "LR Digital";
export const COMPANY_TAGLINE = "Automação com inteligência";

export const DIAGNOSTIC_URL = WHATSAPP_URL || "#contato";

export const hasWhatsApp = Boolean(WHATSAPP_URL);
export const hasEmail = Boolean(CONTACT_EMAIL);
export const hasInstagram = Boolean(INSTAGRAM_URL);
export const hasLinkedIn = Boolean(LINKEDIN_URL);
