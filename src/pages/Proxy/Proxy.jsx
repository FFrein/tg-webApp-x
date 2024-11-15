import { useState } from 'react';
import './styles.css'


export const Proxy = ()=>{
    const [proxy, setProxy] = useState();
    const [mail, setMail] = useState();

    return(
        <div>
            <div>
                <div>
                    <img src="" alt="img"/>
                    <p>TaskName</p>
                </div>
                <p>Invactive</p>
            </div>

            <div>
                <p>Proxy {proxy.length}</p>
                <p>Mail {mail.length}</p>
            </div>

        <div>
            {proxy.map(p=>{
                return <ProxyItem />
            })}
        </div>
        </div>
    );
}