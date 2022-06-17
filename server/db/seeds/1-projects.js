exports.seed = function (knex) {
  return knex('projects')
    .del()
    .then(() =>
      knex('projects').insert([
        {
          // id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          category: 1,
          project_title: 'Community Garden voluntering platform',
          description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sed est risus. Vestibulum ut lectus in nunc egestas lacinia. Sed id augue sed augue iaculis viverra ut id tellus. Integer iaculis, felis sit amet pellentesque dapibus, nisi tellus hendrerit nisl, fringilla mollis augue quam non orci. Aenean blandit rhoncus nibh, nec luctus ligula rutrum quis. Vivamus at risus id diam finibus placerat a vel dui. Pellentesque vitae dignissim lorem. Donec lacinia lectus et eros blandit efficitur. Quisque ornare, nibh ut finibus tempor, metus nisl aliquam est, quis porttitor sem nulla quis libero. Donec tristique gravida.',
          seeking: 1,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 1,
          skill_type: [2, 19],
          skill_description: ' Aliquam id condimentum quam, eget convallis magna. Suspendisse lacinia turpis hendrerit ligula sollicitudin, sit amet placerat nibh iaculis. Sed sit amet maximus felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc diam tellus, gravida ut nibh nec, vestibulum vehicula metus. Duis elementum massa eu elit porta, ac facilisis enim finibus. Curabitur ut mi libero.',
          region: 9
        },
        {
          // id: 2,
          category: 2,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          project_title: 'Website to track political trends',
          description: 'Quisque eleifend tortor sed turpis ornare, tincidunt facilisis massa ornare. Phasellus in nunc dictum, ultrices turpis vitae, pulvinar metus. Ut eget congue elit, vel volutpat tortor. Phasellus dapibus nibh et quam interdum, ut tincidunt diam imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nibh vel eros tempus tincidunt sed vitae risus. Duis eleifend urna nisi, vel feugiat leo suscipit convallis. Vestibulum accumsan fringilla urna nec fermentum. Duis pharetra metus ac justo venenatis, quis placerat purus dictum. Donec dictum, eros a fermentum fermentum, erat urna bibendum nunc, sit amet dignissim lacus ex volutpat augue. Nam sed mauris id.',
          seeking: 4,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 2,
          skill_type: [10, 18, 1, 6, 8],
          skill_description: ' Integer egestas nisi eros, sit amet gravida neque posuere quis. Duis sagittis nunc nulla, vitae interdum leo elementum a. Quisque tellus sapien, pellentesque a suscipit a, interdum quis leo. Sed commodo at felis sed varius. Donec laoreet est ut tellus dapibus gravida. Sed placerat metus nulla, at imperdiet justo fringilla et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at sodales mi. Maecenas finibus nisl a libero tincidunt eleifend. ',
          region: 49

        },
        {
          // id: 3,
          auth0_id: 'auth0|98414f84d35ac900717bc280',
          category: 3,
          project_title: 'Sell robotics learning kits',
          description: 'Praesent at efficitur turpis. Sed consequat ipsum ut lectus mattis efficitur. Donec placerat ipsum nec euismod lobortis. Aenean sagittis interdum erat quis ullamcorper. Proin a erat placerat, porttitor lacus sed, suscipit dui. Fusce arcu metus, vestibulum quis lacus eu, tincidunt condimentum nisi. Integer viverra rhoncus nisi. Cras sit amet porta lorem. Vestibulum semper risus felis, in fermentum augue sodales vel. Aenean ut libero tincidunt augue mollis malesuada. Pellentesque ut porta purus. Vivamus egestas leo eu augue blandit tempus. Sed sagittis pulvinar dictum. Fusce sapien ipsum, vulputate id ligula vitae, varius facilisis nunc. Vestibulum consectetur ornare eros, tempor cursus eros. Praesent.',
          seeking: 3,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 2,
          skill_type: [10, 13],
          skill_description: 'Maecenas efficitur gravida consequat. Morbi leo arcu, convallis sed nunc eu, hendrerit hendrerit mi. Cras fringilla varius elementum. Donec in condimentum leo. Proin quis massa in dui ullamcorper rutrum et et neque. Pellentesque cursus egestas elit at tempus. Pellentesque in dolor maximus, sollicitudin dolor quis, auctor arcu. Aenean a enim et purus elementum tristique sit amet at augue. Nam non elit et leo consequat consequat. Curabitur nec feugiat mi, et sollicitudin neque. Donec vel est iaculis, placerat velit eu, interdum velit. Aenean faucibus tristique elit, a convallis sapien. Cras interdum metus felis, euismod interdum nunc gravida vitae. Ut euismod dignissim.',
          region: 48

        },
        {
          // id: 4,
          auth0_id: 'auth0|98414f84d35ac900717bc280',
          category: 1,
          project_title: 'Create a public funds finder site',
          description: 'Donec auctor ligula nisl, a mattis erat euismod eu. Donec magna orci, suscipit vel eleifend eu, eleifend sed lectus. Etiam a ipsum est. Nunc sollicitudin commodo maximus. Proin volutpat tellus eu ante dictum maximus. Maecenas eu sodales eros, a commodo tellus. Suspendisse potenti. Vestibulum eget ligula sit amet lacus vehicula ullamcorper vitae eu sem. Quisque sed nibh congue, mollis tortor non, commodo lorem. Integer vel varius justo. Sed euismod ut nibh sit amet elementum. Sed vestibulum vitae purus quis luctus. Ut nec luctus eros. Nulla sit amet nunc in turpis accumsan tempus. Morbi pretium odio vehicula venenatis consequat. Fusce ultricies. ',
          seeking: 2,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 2,
          skill_type: [17, 2, 5, 1],
          skill_description: 'Nulla gravida et quam in pulvinar. Maecenas consequat ante ut ligula maximus, ultrices aliquet enim suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat tristique tortor auctor tempus. Vivamus in felis commodo, congue nibh at, suscipit elit. Vestibulum ac purus sed mi faucibus malesuada facilisis eget dui. Aliquam sem neque, aliquam quis mollis at, molestie ut orci. Aenean fringilla elit fringilla massa commodo, ac aliquet justo aliquam. Vivamus vulputate pellentesque odio et luctus. Proin pellentesque facilisis finibus. In suscipit leo id malesuada condimentum. Aliquam ut eros ut nulla tristique hendrerit. Pellentesque sit amet.',
          region: 54

        },
        {
          // id: 5,
          auth0_id: 'auth0|98414f84d35ac900717bc280',
          category: 2,
          project_title: 'Create a local tool sharing system',
          description: 'Fusce blandit, dolor et iaculis laoreet, diam magna vehicula libero, ut vestibulum mi ante vitae mi. Pellentesque sit amet suscipit elit. Integer vitae commodo velit. Integer molestie, risus sit amet tristique ultricies, tortor ipsum tincidunt arcu, vel feugiat velit dolor vel purus. Sed dignissim blandit sapien laoreet rhoncus. Donec fringilla luctus nunc a molestie. Sed sit amet facilisis purus. Aenean lacinia erat nec lectus mollis aliquam. Aenean eu urna a lacus pharetra molestie a ut ipsum. Pellentesque iaculis nibh urna, sed pulvinar sapien euismod a. Maecenas lacinia nec nulla placerat efficitur. Integer gravida, urna sollicitudin laoreet consectetur, tellus neque facilisis.',
          seeking: 1,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 1,
          skill_type: [10, 3, 11, 1],
          skill_description: ' Suspendisse potenti. Aliquam eget sapien tempus, feugiat lorem sed, tempus ex. Aliquam porta, ligula quis scelerisque elementum, ligula justo vehicula quam, at interdum augue magna a lectus. Suspendisse gravida mauris eget ligula mattis auctor. Maecenas tincidunt eleifend lobortis. Nullam velit purus, convallis quis sodales et, sodales vitae tortor. Proin vel. ',
          region: 17

        },
        {
          // id: 6,
          auth0_id: 'auth0|09414f84d35ac900717bc280',
          category: 3,
          project_title: 'Build a local network to teach machine learning',
          description: 'Nulla at mollis nisi, ut maximus massa. Phasellus ac ullamcorper purus, et convallis nibh. Integer auctor sapien nec finibus scelerisque. Aliquam dictum lacinia tincidunt. In hac habitasse platea dictumst. Ut a ultrices augue. Curabitur ullamcorper lectus eu lorem ornare faucibus. Etiam dapibus neque velit, porta luctus nisl vehicula non. Aliquam erat volutpat. In nec arcu magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia tristique augue et placerat. Mauris quis facilisis nunc. Mauris feugiat viverra eros a semper. Suspendisse felis diam, condimentum ac condimentum mollis, luctus in ante. Suspendisse potenti. Nam vel fringilla arcu. Nam cursus aliquam ultricies. ',
          seeking: 4,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 1,
          skill_type: [10, 13, 1, 7, 19],
          skill_description: 'Duis porta volutpat nunc, aliquet luctus turpis aliquam eget. Suspendisse sit amet dolor at nisi tempor gravida nec eu leo. Suspendisse eu molestie quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce venenatis dolor fringilla vehicula condimentum. Aliquam dictum tempor ipsum, vitae ornare erat imperdiet ac. Sed viverra semper lorem et tristique. Suspendisse cursus ornare turpis, imperdiet pellentesque quam accumsan id. Pellentesque molestie neque non fringilla placerat. Donec vel mollis augue. Curabitur nec tincidunt massa. Mauris vel efficitur ex. Nunc malesuada risus urna, non eleifend nibh laoreet sed. Sed facilisis bibendum metus nec dignissim. Donec. ',
          region: 1

        },
        {
          // id: 7,
          auth0_id: 'auth0|09414f84d35ac900717bc280',
          category: 1,
          project_title: 'Develop an artist lead music platform',
          description: 'Sed in porta nisi, vel commodo lectus. Cras eu viverra felis, non facilisis tellus. Mauris accumsan mattis nisl non varius. Vestibulum ac eros a dolor varius posuere. Quisque vehicula nisl ut lectus sodales vehicula. Fusce suscipit odio sed turpis auctor luctus. Phasellus at fermentum sem. Vestibulum bibendum ante vel mauris varius, non dictum ligula tempor. Ut pretium nibh vitae erat rutrum suscipit ac et elit. Donec ac massa enim. Duis tincidunt elit ut dolor maximus volutpat. Curabitur et lectus orci. Mauris sagittis aliquam magna at sodales. Nulla quis odio quis sapien viverra semper. Quisque at eros arcu. Sed sed lectus. ',
          seeking: 3,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 1,
          skill_type: [1, 2, 4, 6, 13],
          skill_description: 'Duis porta volutpat nunc, aliquet luctus turpis aliquam eget. Suspendisse sit amet dolor at nisi tempor gravida nec eu leo. Suspendisse eu molestie quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce venenatis dolor fringilla vehicula condimentum. Aliquam dictum tempor ipsum, vitae ornare erat imperdiet ac. Sed viverra semper lorem et tristique. Suspendisse cursus ornare turpis, imperdiet pellentesque quam accumsan id. Pellentesque molestie neque non fringilla placerat. Donec vel mollis augue. Curabitur nec tincidunt massa. Mauris vel efficitur ex. Nunc malesuada risus urna, non eleifend nibh laoreet sed. Sed facilisis bibendum metus nec dignissim. Donec. ',
          region: 23

        },
        {
          // id: 8,
          auth0_id: 'auth0|09414f84d35ac900717bc280',
          category: 2,
          project_title: 'Produce content to help engage young men with mental health issues',
          description: 'Nam porttitor, enim et mattis fermentum, nibh mauris gravida ligula, vel mattis urna ex ac lorem. Integer condimentum sagittis lacus sed consectetur. Sed ac nibh lobortis, rutrum ex ac, tristique odio. Nunc viverra sed dolor sit amet vulputate. Morbi lorem arcu, aliquet vitae egestas ac, vestibulum id neque. Duis condimentum risus ipsum. Phasellus pellentesque eleifend efficitur. Nulla porta et tellus a accumsan. Fusce ut eleifend quam, quis suscipit tellus. Nunc efficitur felis quis eros dignissim finibus. Integer fermentum, arcu eu tempus eleifend, nisl dui consectetur tortor, tincidunt pulvinar ante diam at erat. Proin consectetur leo sit amet efficitur ultricies. Fusce. ',
          seeking: 2,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 2,
          skill_type: [10, 13, 11, 1, 9],
          skill_description: 'Nullam ac nunc condimentum, hendrerit urna eget, tempor massa. Nulla commodo massa enim, eget lobortis est pulvinar at. In consectetur, nisl eu molestie pretium, sem leo sagittis felis, et elementum nulla felis vitae mi. Ut non sollicitudin ipsum, a placerat felis. Donec tempus ut magna tincidunt accumsan. In ultricies at leo vel porttitor. Etiam mattis libero nec interdum dapibus. Phasellus porttitor in arcu eget luctus. Nullam metus nulla, tristique at tellus ac, semper tempus mauris. Suspendisse ultrices est vel blandit lacinia. Nunc ac dignissim arcu. Curabitur sit amet malesuada nunc, ac euismod ex. Quisque eu blandit lacus. Donec in sem. ',
          region: 87
        },
        {
          // id: 9,
          auth0_id: 'auth0|12414f84d35ac900717bc280',
          category: 3,
          project_title: 'Develop a better freind finder app',
          description: 'Nullam fermentum, neque quis ultricies scelerisque, velit felis varius elit, lobortis molestie purus nisl eu felis. Sed eleifend rutrum diam, eget lobortis nisi malesuada id. Integer luctus iaculis ante, eu mollis justo hendrerit id. Morbi id urna varius, aliquet leo quis, laoreet nibh. Proin a venenatis nulla. Pellentesque ex neque, pharetra ac interdum at, laoreet eu nibh. Donec nec neque non ex commodo bibendum faucibus ac lacus. Vestibulum pharetra aliquet iaculis. Nam eros erat, vehicula eget sodales nec, faucibus in magna. Donec id enim non urna rhoncus posuere in sed nunc. Mauris vel dictum quam. Integer finibus, ex ut elementum. ',
          seeking: 1,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 1,
          skill_type: [9, 10, 12, 16],
          skill_description: ' Nullam tincidunt vulputate ornare. Nunc vehicula sapien arcu, sit amet auctor mi porta non. Praesent eget purus enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet urna sit amet rutrum accumsan. Duis et sodales nisi. Fusce dapibus id ante quis gravida. Suspendisse aliquam erat id enim aliquam, vitae suscipit enim suscipit. Vivamus lacinia nisi urna, eget iaculis arcu porta vitae. Phasellus non eros risus. Morbi justo lacus, commodo nec pulvinar nec, lobortis et mauris.  ',
          region: 32

        },
        {
          // id: 10,
          auth0_id: 'auth0|12414f84d35ac900717bc280',
          category: 1,
          project_title: 'Create a robototic hand prototype',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend sed est in sodales. Vivamus sollicitudin ex varius diam pulvinar eleifend. Morbi pellentesque tortor non erat molestie accumsan. Suspendisse ac enim nunc. Nullam volutpat tortor vel mauris posuere, vel pretium risus iaculis. Nunc consectetur elit arcu, et mollis tortor maximus eu. Donec aliquet malesuada bibendum. Sed eu interdum ante. Curabitur finibus tellus nec venenatis volutpat. Sed lacus lorem, pulvinar a laoreet sed, laoreet id mauris. Cras ut urna rhoncus, ultrices magna vitae, fermentum mi. Nam pellentesque sodales purus. Mauris lobortis enim non auctor aliquet. Maecenas dictum quis nunc eu posuere. ',
          seeking: 4,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 1,
          skill_type: [4, 7],
          skill_description: 'In condimentum eu augue sit amet congue. Donec in ullamcorper leo, vel facilisis massa. Sed elit quam, maximus a ligula sed, iaculis semper ante.  ',
          region: 1

        },
        {
          // id: 11,
          auth0_id: 'auth0|12414f84d35ac900717bc280',
          category: 2,
          project_title: 'Start a corporate behaviour analysis tool',
          description: 'Phasellus lacinia elit at mauris venenatis, et ornare nisl commodo. Phasellus efficitur orci vel quam sagittis, vitae blandit magna fermentum. Nullam lobortis purus sem, id tincidunt lacus aliquet eget. Donec sit amet enim nulla. Phasellus a pulvinar risus. Vivamus iaculis posuere accumsan. Maecenas egestas lectus at tempor faucibus. Sed aliquam, eros quis efficitur venenatis, dolor est convallis tortor, a varius nisl metus ut eros. Vivamus pellentesque elementum leo. Etiam a rhoncus sapien. Mauris posuere lectus vitae lacus tempor aliquam. ',
          seeking: 3,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 1,
          skill_type: [5, 19],
          skill_description: ' Quisque vitae aliquam ipsum, ac iaculis sapien. Nulla sodales metus vel maximus euismod. Mauris tincidunt viverra mi, non ultrices dui bibendum sit amet. Fusce sed odio vel nisi efficitur pharetra. Quisque vestibulum sagittis ligula, at sagittis eros accumsan nec. Fusce a neque eget dui suscipit laoreet. Donec risus risus, consequat ullamcorper commodo nec, auctor in tellus. Aenean malesuada eget felis quis maximus. Vestibulum nulla urna, accumsan quis tortor et, sodales ornare ipsum. Donec felis nisi, hendrerit eget lectus eu, consectetur pharetra nisl. Cras vel eleifend libero, ac suscipit arcu. Integer volutpat lobortis dui et ullamcorper. Aliquam accumsan lacus vitae enim. ',
          region: 43

        },
        {
          // id: 12,
          auth0_id: 'auth0|12414f84d35ac900717bc280',
          category: 3,
          project_title: 'Build a shopping plugin that notifys of cheapest prices',
          description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. In quis lacus vitae quam mollis hendrerit. Aliquam pharetra placerat nibh. Praesent non enim sed urna elementum gravida sit amet quis velit. Donec ultrices pharetra euismod. Proin volutpat congue sem, ac rhoncus mauris efficitur sit amet. Donec eleifend ante eget mauris auctor, id maximus libero rhoncus. Proin sed elit eget velit mattis elementum ut fermentum tortor. Ut non diam enim. In laoreet massa ultricies fermentum dictum. Phasellus pretium luctus massa a faucibus. Mauris facilisis laoreet augue dapibus efficitur. Maecenas ac velit vitae mauris placerat ultrices in et tellus. Phasellus nec. ',
          seeking: 2,
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          started: 1,
          skill_type: [11, 14],
          skill_description: 'Proin tellus sem, ultricies vitae rutrum sit amet, rutrum quis urna. Duis sagittis laoreet felis quis efficitur. Nullam non neque odio. Integer sagittis eget justo ac mollis. Maecenas nec mauris purus. Pellentesque lobortis orci quis erat hendrerit, condimentum efficitur arcu sagittis. In efficitur eros libero, in dictum quam malesuada in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam feugiat volutpat metus quis sollicitudin. Praesent bibendum, quam at feugiat facilisis, erat purus ornare risus, a porta leo quam sit amet leo. Proin sed congue est, quis sagittis nisi. Morbi malesuada dui urna, ac auctor neque. ',
          region: 32

        },
        {
          // id: 13,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          project_title: 'Develop a survey platform for panels',
          category: 1,
          region: 88,
          description: 'Suspendisse potenti. Vivamus a condimentum eros. Sed risus nisi, scelerisque id ullamcorper nec, suscipit ut mauris. Fusce bibendum iaculis ligula, ut eleifend orci malesuada sed. Maecenas efficitur a ligula et pulvinar. Vestibulum et lacus at magna molestie elementum. Donec molestie dolor id nisi molestie ornare. Phasellus varius, mi at convallis imperdiet, elit sem feugiat leo, at ultricies mi velit nec lacus. Aenean eget leo a orci elementum pretium id at velit. Vivamus finibus nunc vitae ullamcorper ultricies. Praesent vel tellus orci. Aliquam erat ante, fringilla id sodales eget, ullamcorper at purus. Maecenas consequat eu magna eget convallis. Orci varius natoque. ',
          success: 'Nullam quis odio sed leo condimentum sagittis. Mauris diam leo, porta at ante feugiat, sagittis laoreet felis. Morbi pulvinar velit in fermentum dapibus. Nunc aliquam.',
          seeking: 1,
          started: 1,
          skill_type: [1, 3],
          skill_description: 'Quisque finibus ac neque eu cursus. Mauris at ultricies urna, in bibendum augue. Nullam interdum in tortor quis commodo. Ut a risus vestibulum, molestie ligula fringilla, consectetur magna. Quisque vitae massa erat. Integer aliquet diam lorem, vitae facilisis risus venenatis quis. Mauris est urna, commodo non felis eu, viverra pulvinar sem. Fusce lorem ipsum, bibendum eu velit eu, pharetra vehicula enim. Nullam id lorem sit amet lacus dignissim eleifend.'
        }
      ])
    )
}
