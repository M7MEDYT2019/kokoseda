const code = '=';//prefix
 
client.on('message',async message => {
    if(message.content.startsWith(code + "buy")) {
  if(!message.channel.guild) return message.reply('This Command For Servers Only !');
    let jscodes = message.guild.channels.find(`name`, "orders");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| ما اسم المنتج الذي تريد شراءة؟... :pencil2: **').then(msg => {
 
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| ما هو اسم البائع الذي تريد شراء منه؟... :pencil2: **').then(msg => {
 
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              msg.edit(':man_in_tuxedo: **| برجاء ان تمنشن نفسك... :pencil2: **').then(msg => {
 
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        msg.edit(':shield: **| [ هل انت متاكد من عملية الشراء؟  | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**${message.guild.name} :arrow_down:**            
\`\`\`
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**المنتج**: ${boi}
**تم الطلب بوسطه**: ${message.author}
**اسم الشخص**: ${boi2}`);
          }
        }
    );
});
      });
    }
      );
    });
}
);
      })}});