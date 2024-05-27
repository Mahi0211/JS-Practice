let hour = 23;

if (hour >= 6 && hour < 12){
    console.log('Good Morning')
}

else if (hour >= 12 && hour < 18){
    console.log ('Good Afternoon');
}

else 
    console.log('Good Evening')


    // Switch case

    let role;

    switch (role){
        case 'guest':
            console.log('Quest');
            break; 
        case 'moderator':
            console.log('Moderator');
            break;
        default:
            console.log('Unknown user')     
    }