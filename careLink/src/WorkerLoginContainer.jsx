import React, { useState } from "react";
import WorkerLogin from "./workerLogin";
import QRCode from "react-qr-code";

export default function WorkerLoginContainer() {
    const [workerId, setWorkerId] = useState("");
    const [authResult, setAuthResult] = useState(null);
    const [workerDetails, setWorkerDetails] = useState(null);

    const authenticateWorker = async () => {
        setAuthResult(null);
        setWorkerDetails(null);
        try {
            const response = await fetch("http://localhost:5000/api/worker/workerId", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ workerId })
            });

             if (!response.ok) {
                setAuthResult(`Server error: ${response.status} ${response.statusText}`);
                setWorkerDetails(null);
                return;
            }

            const data = await response.json();

            if (data.success) {
                setAuthResult("Authenticated");
                console.log(data);
                setWorkerDetails({
                    name: data.name,
                    age: data.age,                                  
                    phone: data.phone,
                    workerId: data.workerId
                });
            } else {
                setAuthResult("Invalid UID");
            }
        } catch (error) {
            setAuthResult(error.message || "Server error");
        }
    };

    return (
        <>
            {!workerDetails ? (
                <>
                    <WorkerLogin
                        value={workerId}
                        onChange={setWorkerId}
                        onSubmit={authenticateWorker}
                    />
                    {authResult && <div>{authResult}</div>}
                </>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                    <QRCode value={JSON.stringify(workerDetails)} size={256} />
                    <p>Scan this QR code to get worker details.</p>
                </div>
            )}
        </>
    );
}