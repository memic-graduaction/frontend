// extractVideoId.ts
export function extractVideoIdFromLink(url: string): string | null {
    try {
      const regex = /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\?v=|v\/|embed\/|watch\?.+&v=))([^&\n?]+)/;
      const match = url.match(regex);
      if (match && match.length > 1) {
        return match[1];
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  }
  