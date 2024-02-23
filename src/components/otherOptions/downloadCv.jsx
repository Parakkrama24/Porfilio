const handleDownload = () => {
    // Assuming your CV PDF file is named "Profile.pdf" and located in the "public" folder
    const cvUrl = '/Profile.pdf';
    console.log("demo");
    window.open(cvUrl, '_blank');
  };
  
  export default handleDownload;