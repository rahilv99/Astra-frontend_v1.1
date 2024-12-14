'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { sendContactForm } from './actions'

export function ContactForm() {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await sendContactForm({ subject, body })
      toast({
        title: "Message sent",
        description: "Thank you for your feedback!",
      })
      setSubject('')
      setBody('')
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="bg-white bg-opacity-10 border-cyan-200 text-white placeholder-cyan-300"
        />
      </div>
      <div>
        <Textarea
          placeholder="Your message"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="bg-white bg-opacity-10 border-cyan-200 text-white placeholder-cyan-300 min-h-[150px]"
        />
      </div>
      <Button type="submit" className="w-full bg-cyan-200 hover:bg-cyan-600 text-black rounded-xl">
        Send
      </Button>
    </form>
  )
}