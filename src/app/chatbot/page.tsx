'use client'

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { use, useState } from "react";
import { useRouter } from "next/navigation";

export default function Chatbot() {

    const router = useRouter();
    const handleSubmit = (e: React.MouseEventHandler<HTMLButtonElement>) => { 
        router.push("/bookingDetails");
    }
    
    const [showMuseumOptions, setShowMuseumOptions] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary to-primary-foreground">
          <div className="bg-background rounded-xl shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground rounded-t-xl">
              <h2 className="text-lg font-semibold">AI Assistant</h2>
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/robot.jpeg" alt="Avatar" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </div>
            <div className="h-[400px] overflow-y-auto px-4 py-6 space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/robot.jpeg" alt="Avatar" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg px-4 py-2 max-w-[70%]">
                  <p className="text-black">Hello, how can I assist you today?</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-[70%]">
                  <Button onClick={() => setShowMuseumOptions(true)}>Select Museum</Button>
                </div>
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/user.jpeg" alt="Avatar" />
                  <AvatarFallback>YO</AvatarFallback>
                </Avatar>
              </div>
              {showMuseumOptions && (
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage src="/robot.jpeg" alt="Avatar" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg px-4 py-2 max-w-[70%]">
                    <p className="text-black">select one! Here are 4 museum options for you to explore:</p>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div>
                        <Link href="/bookingDetails" prefetch={false}>
                          <img
                            src="/delhi.jpg"
                            alt="National Museum Delhi"
                            width={100}
                            height={100}
                            className="rounded-md"
                            style={{ aspectRatio: "100/100", objectFit: "cover" }}
                          />
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">National Museum</p>
                      </div>
                      <div>
                        <Link href="/bookingDetails" prefetch={false}>
                          <img
                            src="/mumbai.jpg"
                            alt="Wales Museum Mumbai"
                            width={100}
                            height={100}
                            className="rounded-md"
                            style={{ aspectRatio: "100/100", objectFit: "cover" }}
                          />
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">Wales Museum</p>
                      </div>
                      <div>
                        <Link href="bookingDetails" prefetch={false}>
                          <img
                            src="/tridev.jpg"
                            alt="Napier Museum"
                            width={100}
                            height={100}
                            className="rounded-md"
                            style={{ aspectRatio: "100/100", objectFit: "cover" }}
                          />
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">Napier Museum </p>
                      </div>
                      <div>
                        <Link href="bookingDetails" prefetch={false}>
                          <img
                            src="/ahmd.jpeg"
                            alt="Museum 4"
                            width={100}
                            height={100}
                            className="rounded-md"
                            style={{ aspectRatio: "100/100", objectFit: "cover" }}
                          />
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">Calico Museum</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
  }