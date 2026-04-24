import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">Get in touch with the ElevestOS team</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <Input placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <Input placeholder="Doe" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <Input type="email" placeholder="john@example.org" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <Textarea placeholder="How can we help?" rows={5} />
          </div>
          
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-lg font-semibold text-primary mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-2 text-gray-600">
            <p>Email: support@elevestos.com</p>
            <p>Website: https://elevestos.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}