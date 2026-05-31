"use client"

import "./globals.css"

export default function GlobalError() {
    return (
        <html>
            <body>
                <div>
                    <h2>Something Went wrong!</h2>
                    <button onClick={() => {
                        //refresh the page
                        window.location.reload();
                    }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
                    >
                        Refresh
                    </button>
                </div>
            </body>
        </html>

    )
}