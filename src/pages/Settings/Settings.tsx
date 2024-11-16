import { useEffect, useState } from "react";
import { Logo } from "../../components/Logo/Logo"
import "./styles.css"

declare global {
    interface Window {
        Telegram?: {
            WebApp: {
                initData: string;
                initDataUnsafe: {
                    user?: {
                        id: number;
                        first_name: string;
                        last_name?: string;
                        username?: string;
                        language_code?: string;
                    };
                    auth_date: number;
                    hash: string;
                };
                close(): void;
                expand(): void;
                sendData(data: string): void;
            };
        };
    }
}


export const Settings = ()=>{
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const tg = window.Telegram?.WebApp;

        if (tg && tg.initDataUnsafe?.user) {
            const userData = tg.initDataUnsafe.user;
            setUser(userData);
        } else {
            console.error("Telegram WebApp не инициализировано");
        }
    }, []);

    return(
        <>
        <Logo/>
        <div>
            {user ? (
                <div>
                    <p>ID пользователя: {user.id}</p>
                    <p>Имя пользователя: {user.first_name} {user.last_name}</p>
                </div>
            ) : (
                <p>Авторизация не выполнена.</p>
            )}
        </div>
        </>
    )
}   