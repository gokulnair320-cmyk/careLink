import React, { useState } from "react";
import WorkerLogin from "./workerLogin";
import { QRCode } from "qrcode.react";

export default function WorkerLoginContainer() {
    const [workerId, setWorkerId] = useState("");
    const [authResult, setAuthResult] = useState(null);
    const [workerDetails, setWorkerDetails] = useState(null);

    const authenticateWorker = async () => {
        setAuthResult(null);
        setWorkerDetails(null);
        try {
            const response = await fetch("/api/worker/workerId", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ workerId })
            });
            const data = await response.json();
            if (data.success) {
                setAuthResult("Authenticated");
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
            <WorkerLogin
                value={workerId}
                onChange={setWorkerId}
                onSubmit={authenticateWorker}
            />
            {authResult && <div>{authResult}</div>}
            {workerDetails && (
                <div>
                    <h1>Name: {workerDetails.name}</h1>
                    <h2>Age: {workerDetails.age}</h2>
                </div>
            )}
        </>
    );
}