async function getipAddress():Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const { ip } = await response.json() as { ip: string };
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return ip;
  } catch (error) {
    throw new Error(`Error fetching data: ${error as string}`);
  }
}

export default getipAddress;
