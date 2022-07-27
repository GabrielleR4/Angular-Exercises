import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
 favLinks = ['https://www.girlsgogames.com/', 'https://www.panerabread.com/en-us/home.html?ef_id=f0f4da075b6717c36ceeb8dbc7edabf4%3AG%3As&s_kwcid=AL%2115596%2110%2176553657932620%2176553716329494&msclkid=f0f4da075b6717c36ceeb8dbc7edabf4&utm_source=bing&utm_medium=cpc&utm_campaign=Gold-US-BR-Exact&utm_term=panera%20bread&utm_content=Gold' ]
  constructor() { }

  ngOnInit() {
  }

}
