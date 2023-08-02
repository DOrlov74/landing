export const makePostRequest = (url: string, details: any, setSent: any, setLoading: any) => {
    fetch(url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        })
        .then((response) => {
            if (response.ok) {
                setLoading(false);
                setSent(true);
                return response.json();
            } else {
                setLoading(false);
                setSent(false);
                return Promise.reject(response);
            }
        })
        .catch((error) => {
            //console.log(error);
            setLoading(false);
            setSent(false);
        });
};

const telegramBotKey = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const chat_id = process.env.REACT_APP_TELEGRAM_USER_ID;

export const sendNotification = (text:string, setSent: any, setLoading: any, parse_mode?: string) => {
    const endpoint = `https://api.telegram.org/bot${telegramBotKey}/sendMessage`;
    makePostRequest(endpoint,
        {
            text,
            parse_mode,
            chat_id
        }, setSent, setLoading);
};