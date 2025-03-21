{selectedJob && (
    <Dialog open={true} onOpenChange={() => setSelectedJob(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{selectedJob.title}</DialogTitle>
          <DialogDescription>{selectedJob.description}</DialogDescription>
        </DialogHeader>
        <div>
          <h3 className="font-bold">Required Skills:</h3>
          <ul>
            {selectedJob.requiredSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <Button
          onClick={handleApply}
          className="rounded bg-green-600 py-2 px-4 text-sm text-white data-[hover]:bg-green-500 data-[active]:bg-green-700"
        >
          Apply Now
        </Button>
      </DialogContent>
    </Dialog>
  )}
  