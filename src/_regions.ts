function lookup(regionKey: string) {
  switch (regionKey) {
    case "asia-northeast1":
      return {
        id: regionKey,
        name: "Tokyo",
        emoji: "🇯🇵",
      };

    case "asia-south1":
      return {
        id: regionKey,
        name: "Mumbai",
        emoji: "🇮🇳",
      };

    case "asia-southeast1":
      return {
        id: regionKey,
        name: "Singapore",
        emoji: "🇸🇬",
      };

    case "australia-southeast1":
      return {
        id: regionKey,
        name: "Sydney",
        emoji: "🇦🇺",
      };

    case "me-west1":
      return {
        id: regionKey,
        name: "Tel Aviv",
        emoji: "🇮🇱",
      };

    case "europe-west2":
      return {
        id: regionKey,
        name: "London",
        emoji: "🇬🇧",
      };

    case "europe-west3":
      return {
        id: regionKey,
        name: "Frankfurt",
        emoji: "🇩🇪",
      };

    case "europe-west4":
      return {
        id: regionKey,
        name: "the Netherlands",
        emoji: "🇳🇱",
      };

    case "southamerica-east1":
      return {
        id: regionKey,
        name: "São Paulo",
        emoji: "🇧🇷",
      };

    case "us-east4":
      return {
        id: regionKey,
        name: "North Virginia",
        emoji: "🇺🇸",
      };

    case "us-south1":
      return {
        id: regionKey,
        name: "Texas",
        emoji: "🇺🇸",
      };

    case "us-west2":
      return {
        id: regionKey,
        name: "California",
        emoji: "🇺🇸",
      };

    default:
      return {
        id: regionKey,
        name: "Your PC",
        emoji: "💻",
      };
  }
}

export default {
  lookup,
};
