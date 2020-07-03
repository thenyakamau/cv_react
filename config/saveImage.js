async function saveImage(file, filePath) {
 await file.mv(`${process.cwd()}/client/public/${filePath}`, (err) => {
    if (err) {
      console.error(err);
      return false;
    }
  });
  return true;
}

module.exports = saveImage;
