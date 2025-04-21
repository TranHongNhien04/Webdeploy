import React from "react";

const Contact = () => {
    return (
        <div className="w-full min-h-screen flex flex-col relative">
            <main className="flex-grow pt-24" style={{ backgroundColor: '#E2F3FC' }}>
                <div className="py-20 px-4 md:px-20 min-h-screen">
                    <div className="max-w-5xl mx-auto bg-white grid md:grid-cols-2 gap-4 overflow-hidden shadow-lg rounded-xl">

                        <div className="flex items-center justify-center p-8">
                            <div className="w-full">
                                <h3 className="text-2xl font-semibold mb-6">Liên hệ chúng tôi</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Họ tên</label>
                                        <input
                                            type="text"
                                            placeholder="Tên của bạn"
                                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Lời nhắn</label>
                                        <textarea
                                            placeholder="Nhập lời nhắn của bạn..."
                                            className="w-full mt-1 p-2 h-24 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gray-500 text-white rounded-md py-2 hover:bg-white hover:text-black border-2 border-gray-500 transition duration-300 ease-in-out"
                                    >
                                        Gửi
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <iframe
                                title="Map"
                                className="w-full h-[450px] md:h-full rounded-r-xl"
                                src="https://maps.google.com/maps?q=Gò%20Vấp,%20Ho%20Chi%20Minh,%20Vietnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;
