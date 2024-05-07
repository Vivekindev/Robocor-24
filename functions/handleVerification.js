const handleVerification = async (email, event) => {
    try {
        const { default: eventData } = await import(`../validation/eventList/${event}.js`);
        const foundData = eventData.find(data => (data.email === email || data.contact === email));
        return foundData ? foundData.name : 'null404';
    } catch (error) {
        return 'null404';
    }
}

export default handleVerification;
