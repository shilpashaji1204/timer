
    const timer = process.argv.slice(2).map(Number);
    for (let i = 0; i < timer.length; i++) {
        const time = timer[i];

        if(isNaN(time) || time < 0) {
            continue;
        }
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
    console.log(`Set ${timer.length} alarms.`);