export const logger = () => {
  try {
    throw new Error('Get filename');
  } catch (error: any) {
    const fileNameMatch = error.stack.match(/\n.*at .* \((.*):[0-9]+:[0-9]+\)/);
    const fileName = fileNameMatch ? fileNameMatch[1].split('/').pop() : 'unknown';
      console.log(error.stack)
    console.log(`Logging from ${fileName}`);
  }
};
