'use client'

import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {useRouter} from "next/navigation";

export default function Component() {
  const [showMuseumOptions, setShowMuseumOptions] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [numTickets, setNumTickets] = useState(1)
  const [email, setEmail] = useState("")
  type Date =  any;

  const totalAmount = numTickets * 20;

  const router = useRouter();

  const handleSubmit = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    router.push("/paymentDetails");
 }


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
                <p>Excellent choice! Here are 4 museum options for you to explore:</p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div>
                    <Link href="#" prefetch={false}>
                      <img
                        src="/placeholder.svg"
                        alt="Museum 1"
                        width={100}
                        height={100}
                        className="rounded-md"
                        style={{ aspectRatio: "100/100", objectFit: "cover" }}
                      />
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">Museum 1</p>
                  </div>
                  <div>
                    <Link href="#" prefetch={false}>
                      <img
                        src="/placeholder.svg"
                        alt="Museum 2"
                        width={100}
                        height={100}
                        className="rounded-md"
                        style={{ aspectRatio: "100/100", objectFit: "cover" }}
                      />
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">Museum 2</p>
                  </div>
                  <div>
                    <Link href="#" prefetch={false}>
                      <img
                        src="/placeholder.svg"
                        alt="Museum 3" 
                        width={100}
                        height={100}
                        className="rounded-md"
                        style={{ aspectRatio: "100/100", objectFit: "cover" }}
                      />
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">Museum 3</p>
                  </div>
                  <div>
                    <Link href="#" prefetch={false}>
                      <img
                        src="/placeholder.svg"
                        alt="Museum 4"
                        width={100}
                        height={100}
                        className="rounded-md"
                        style={{ aspectRatio: "100/100", objectFit: "cover" }}
                      />
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">Museum 4</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedDate && (
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg px-4 py-2 max-w-[70%]">
                <p className='text-black'>
                  Great, you've selected {selectedDate.toLocaleDateString()}. Now, please enter your email and the
                  number of tickets you'd like to purchase:
                </p>
                <div className="grid gap-2 mt-4">
                  <div>
                    <Label className='text-black' htmlFor="email">Email</Label>
                    <Input className="text-black" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <Label className="text-black" htmlFor="tickets ">Tickets (20 per person)</Label>
                    <Input className="text-black"
                      id="tickets"
                      type="number"
                      value={numTickets}
                      onChange={(e) => setNumTickets(parseInt(e.target.value))}
                    />
                  </div>
                  <Button onClick={handleSubmit} className="w-full text-white">Proceed to Pay ({totalAmount} INR)</Button>
                </div>
              </div>
            </div>
          )}
          {!selectedDate && (
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg px-4 py-2 max-w-[70%]">
                <p className='text-black'>Please select a date for your museum visit:</p>
                <div className="mt-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                        <span className='text-black'>
                        {(selectedDate as Date) ? (selectedDate as Date).toLocaleDateString() : "Pick a date"}
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function CalendarDaysIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}