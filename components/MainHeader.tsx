
export default function MainHeader() {

    const styles = {
        container: {
            backgroundColor: '#000000            ',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-around',
            padding: "4px"
        },
    };

    return (
        // <div style={styles.container}>
        //     <Link href="/"><p>Eventify</p></Link>
        //     <Link href="/host"><p>Host</p></Link>
        //     <Link href="/events"><p>Events</p></Link>
        //     <Link href="/dashboard"><p>Dashboard</p></Link>
        //     <Sign />
        // </div>
        <div style={styles.container} className="bg-black">
            <p className="text-xs sm:text-xs">BUY 5 GET 15&#x00025; OFF</p>
        </div>
    )
}