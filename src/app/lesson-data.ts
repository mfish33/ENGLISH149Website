interface LessonBase {
    id: string
    content: string
    background: string
    img: string,
    shortName: string,
    caution?: string[]
}
export interface lessonVid extends LessonBase {
    vid: string
}
export interface lessonImg extends LessonBase {

}

export const lessons: (lessonVid | lessonImg)[] = [
    {
        id: 'Find-a-safe-location',
        shortName: '1.Find a location',
        img: 'pullOver.png',
        background: 'background1.png',
        /*html*/
        content: `
            <h2><u>1.Find a safe location</u></h2>
            <p>Find a safe place to stop your vehicle and park. Turn off your engine. Hard dirt or concrete is better for the jack to lift the car.</p>
        `,
        caution: [
            'Avoid hills if possible to prevent the car from rolling.'
        ]
    },
    {
        id: 'Use-your-hazard-lights-and-parking-brake',
        shortName: '2.Ensure Safety',
        img: 'hazzardLights.png',
        background: 'background2.png',
        /*html*/
        content: `
            <h2><u>2.Use your hazard lights and parking brake</u></h2>
            <p>Turn on your hazard lights to keep yourself safe and engage the parking brake to keep the car from moving while changing the tire.</p>
        `
    },
    {
        id: 'Locate-and-gather-your-materials',
        shortName: '3.Gather Materials',
        img: 'gettingSupplies.png',
        background: 'background3.png',
        /*html*/
        content: `
            <h2><u>3.Locate and gather your materials</u></h2>
            <p>These include your jack, spare tire, and lug wrench. (Pictured above). Consult your car’s owner manual for the location of these tools. Gather the tools and tire and have them handy.</p>
        `
    },
    {
        id: 'Use-the-lug-wrench-to-loosen-the-lug-nuts',
        shortName: '4.Loosen Lug Nuts',
        img: 'removingLugnuts.png',
        background: 'background4.png',
        /*html*/
        content: `
            <h2><u>4.Use the lug wrench to loosen the lug nuts</u></h2>
            <p>If your car has a wheel cover (hubcap), remove it with a screwdriver or pry it off with the flat end of the lug wrench. Turn each lug nut counterclockwise in order to loosen it, but do not remove them yet.</p>
        `
    },
    {
        id: 'Locate-the-jacking-point-on-your-car',
        shortName: '5.Locate Jack Point',
        img: 'locateJackPoint.png',
        background: 'background5.png',
        /*html*/
        content: `
            <h2><u>5.Locate the jacking point on your car</u></h2>
            <p>Do not place the jack where it will have contact with any plastic molding.</p>      
        `,
        caution: [
            'Do not place the jack where it will have contact with any plastic molding.'
        ]
    },
    {
        id: 'Use-the-jack-to-lift-your-car-off-the-ground',
        shortName: '6.Lift Car',
        img: 'liftCar.png',
        vid: 'raisingTheCar.mp4',
        background: 'background6.png',
        /*html*/
        content: `
            <h2><u>6.Use the jack to lift your car off the ground</u></h2>
            <p>Once the jack is secure under the jacking point, crank the jack until the flat tire is off the ground.</p>
            
        `
    },
    {
        id: 'Remove-the-lug-nuts-and-tire',
        vid: 'removingTheTire.mp4',
        shortName: '7.Remove Lug Nuts',
        img: 'removingLugnutsHand.png',
        background: 'background1.png',
        /*html*/
        content: `
            <h2><u>7.Remove the lug nuts and tire</u></h2>
            <p>Use the lug wrench to finish removing the loose lug nuts. Once they are all off, place them in a safe spot and remove the tire. Securely grip the tire and pull towards you to remove. Set the flat tire aside.</p>   
        `
    },
    {
        id: 'Put-on-your-spare-tire',
        shortName: '8.Replacing Tire',
        img: 'placeSpare.png',
        background: 'background2.png',
        /*html*/
        content: `
            <h2><u>8.Put on your spare tire</u></h2>
            <p>Carefully lift your spare and a;ign the holes with the protruding lug nut posts. Once aligned, push the spare onto the posts and into the proper place. </p>
            
        `
    },
    {
        id: 'Replace-the-lug-nuts',
        shortName: '9.Replacing Lug Nuts',
        img: 'placeSpare.png',
        background: 'background3.png',
        /*html*/
        content: `
            <h2><u>9.Replace the lug nuts</u></h2>
            <p> Put the lug nuts onto the lug nut posts so that the spare stays put. Lightly tighten them by turning clockwise by hand. Tighten further with the lug wrench until snug but do not fully tighten. Tighten the nuts by alternating every-other nut. This will ensure the tire is tightened straight.</p>  
        `
    },
    {
        id: 'Lower-your-car',
        vid: 'loweringTheCar.mp4',
        shortName: '10.Lowering Car',
        img: 'loweringTheCar.png',
        background: 'background4.png',
        /*html*/
        content: `
            <h2><u>10.Lower your car</u></h2>
            <p>Using the jack, lower your car back onto the ground. Once fully lowered, remove the jack from underneath.</p>      
        `,
        caution: [
            'Ensure you are in a safe position before lowering the car'
        ]
    },
    {
        id: 'Fully-tighten-lug-nuts',
        shortName: '11.Tighten Lug Nuts',
        img: 'tightenLugNuts.png',
        background: 'background5.png',
        /*html*/
        content: `
            <h2><u>11.Fully tighten lug nuts</u></h2>
            <p>Continue to tighten your lug nuts as much as possible. Continue the every-other nut pattern until they don’t budge.</p>  
        `
    },
    {
        id: 'Clean-up-materials',
        shortName: '12.Clean Up',
        img: 'cleanUp.png',
        background: 'background6.png',
        /*html*/
        content: `
            <h2><u>12.Put on your spare tire</u></h2>
            <p>Place your tools and flat tire back into your car where they came from</p>
            <h2>CONGRATULATIONS You Have Successfully Replaced Your Tire</h2>
        `,
        caution: [
            'Many spare tires are not full size and are not meant to be driven long distances or at high speeds.',
            'Take your car into a mechanic to replace your spare with a real tire.',
            'Keep your speed below 50 mph with the spare.',
            'If driving on the highway with the spare tire, reduce speed and use hazard lights.'
        ]
    },
]
