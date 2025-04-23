import React, {useState} from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {useToast} from "@/hooks/use-toast";

interface LevelCompleteProps {
  level: number;
  guesses: string[];
}

export const LevelComplete = ({ level, guesses }: LevelCompleteProps) => {
  const [open, setOpen] = useState(false);
  const {toast} = useToast();

  const shareResults = () => {
    const resultsText = `I beat Level ${level + 1} of Star Wordle in ${guesses.length} tries!\n`;
    const shareData = {
      text: resultsText,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch((error) => {
          console.error('Error sharing:', error);
          // Fallback to copy to clipboard
          navigator.clipboard.writeText(resultsText)
            .then(() => {
              toast({
                title: "Results copied to clipboard",
                description: "Share the results by pasting them wherever you like!",
              });
            })
            .catch(err => {
              toast({
                title: "Error",
                description: "Failed to copy results to clipboard.",
                variant: "destructive",
              });
            });
        });
    } else {
      // Fallback to copy to clipboard if navigator.share is not supported
      navigator.clipboard.writeText(resultsText)
        .then(() => {
          toast({
            title: "Results copied to clipboard",
            description: "Share the results by pasting them wherever you like!",
          });
        })
        .catch(err => {
          toast({
            title: "Error",
            description: "Failed to copy results to clipboard.",
            variant: "destructive",
          });
        });
    }
    setOpen(false);
  };

  return (
    <div className="level-complete-overlay">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)}>Share Results</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Share Your Achievement!</DialogTitle>
            <DialogDescription>
              Let others know how awesome you are at Star Wordle!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>Share your results with the world!</p>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={shareResults}>
              Share
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
