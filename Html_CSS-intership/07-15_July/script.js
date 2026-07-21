const input = document.getElementById("user-input");
const btn = document.getElementById("sent-btn");
const chatBox = document.getElementById("chat-box");

const apiKey = "mi_api_key";

btn.addEventListener("click", sendMessage);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    // User Message
    const userBubble = document.createElement("div");
    userBubble.className = "msg user";
    userBubble.textContent = text;
    chatBox.appendChild(userBubble);

    input.value = "";

    // Bot Loading
    const botBubble = document.createElement("div");
    botBubble.className = "msg bot";
    botBubble.textContent = "Typing...";
    chatBox.appendChild(botBubble);

    chatBox.scrollTop = chatBox.scrollHeight;

    const reply = await getBotResponse(text);

    botBubble.textContent = reply;

    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotResponse(text) {

    const apiURL = "https://api.groq.com/openai/v1/chat/completions";

    try {

        const response = await fetch(apiURL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },

            body: JSON.stringify({

                model: "llama-3.1-8b-instant",

                messages: [
                    {
                        role: "user",
                        content: text
                    }
                ]

            })

        });

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

        return data.choices[0].message.content;

    } catch (error) {

        console.error(error);

        return "Something went wrong!";
    }
}