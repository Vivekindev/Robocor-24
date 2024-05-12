const handleVerification = async (emailOrContact, event) => {
    try {
        const { default: eventData } = await import(`../validation/eventList/${event}.js`);
        const foundData = eventData.find(data => (data.email === emailOrContact || data.contact.toString() === emailOrContact));
        return foundData ? foundData.name : 'null404';
    } catch (error) {
        return 'null404';
    }
}

export default handleVerification;
