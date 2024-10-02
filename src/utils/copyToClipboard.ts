export async function copyTextToClipboard(text: string) {
    if (!navigator.clipboard) {
      console.error("Clipboard API is not available.");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard successfully!");
    } catch (err) {
      console.error("Failed to copy text to clipboard using Clipboard API:", err);
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (successful) {
          console.log(
            "Text copied to clipboard using execCommand as a fallback!"
          );
        } else {
          console.error("Failed to copy text to clipboard using execCommand.");
        }
      } catch (fallbackErr) {
        console.error(
          "Failed to copy text to clipboard using fallback method:",
          fallbackErr
        );
      }
    }
  };