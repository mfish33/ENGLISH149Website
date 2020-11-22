interface LessonBase{
    id:string
    content:string
    background:string
    img:string
}
export interface lessonVid extends LessonBase{
    vid:string
}
export interface lessonImg extends LessonBase{
    
}

export const lessons:(lessonVid | lessonImg)[] = [
    {
        id:'step1',
        img:'titletest1.png',
        background:'background1.png',
        /*html*/
        content:`
            <h2><u>Removing The Wheel</u></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nunc eget dui fringilla congue. Fusce congue tincidunt justo, et vehicula nisl. Aenean ac libero hendrerit, rutrum felis sed, vestibulum magna. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nunc eget dui fringilla congue. Fusce congue tincidunt justo, et vehicula nisl. Aenean ac libero hendrerit, rutrum felis sed, vestibulum magna. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nunc eget dui fringilla congue. Fusce congue tincidunt justo, et vehicula nisl. Aenean ac libero hendrerit, rutrum felis sed, vestibulum magna. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nunc eget dui fringilla congue. Fusce congue tincidunt justo, et vehicula nisl. Aenean ac libero hendrerit, rutrum felis sed, vestibulum magna. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nunc eget dui fringilla congue. Fusce congue tincidunt justo, et vehicula nisl. Aenean ac libero hendrerit, rutrum felis sed, vestibulum magna. </p>
            <h3><u>Remember:</u></h3>
            <ul>
                <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra</li>
                <li>per inceptos himenaeos. Nam eu urna porta, tempus </li>
            </ul>
        `
    },
    {
        id:'step2',
        img:'titletest2.png',
        background:'titletest1.png',
        /*html*/
        content:`
            <h2><u>Removing The Wheel</u></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nunc eget dui fringilla congue. Fusce congue tincidunt justo, et vehicula nisl. Aenean ac libero hendrerit, rutrum felis sed, vestibulum magna. </p>
            <h3><u>Remember:</u></h3>
            <ul>
                <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra</li>
                <li>per inceptos himenaeos. Nam eu urna porta, tempus </li>
            </ul>
        `
    },
    {
        id:'step3',
        img:'titletest1.png',
        background:'background1.png',
        /*html*/
        content:`
            <h2><u>Third step</u></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nunc eget dui fringilla congue. Fusce congue tincidunt justo, et vehicula nisl. Aenean ac libero hendrerit, rutrum felis sed, vestibulum magna. </p>
            <h3><u>Remember:</u></h3>
            <ul>
                <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra</li>
                <li>per inceptos himenaeos. Nam eu urna porta, tempus </li>
            </ul>
        `
    },

]
