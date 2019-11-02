import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toughts',
  templateUrl: './toughts.component.html',
  styleUrls: ['./toughts.component.scss']
})
export class ToughtsComponent implements OnInit {
  toughts = [
    {
      i18nKey: "PAGES.TOUGHTS.ACTIVE",
      isHappy: true
    },

    {
      i18nKey: "PAGES.TOUGHTS.FOCUSED",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.JOYFUL",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.INTERESTED",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.SERENE",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.HOPEFUL",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.GLAD",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.SURPRISED",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.CHEERFUL",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.CONFIDENT",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.RELIEVED",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.IN_LOVE",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.ENTHUSIASTIC",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.RELAXED",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.SATISFACTED",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.PROUD",
      isHappy: true
    },
    {
      i18nKey: "PAGES.TOUGHTS.SAD",
    },
    {
      i18nKey: "PAGES.TOUGHTS.ASHAMED",
    },
    {
      i18nKey: "PAGES.TOUGHTS.ANXIOUS",
    },
    {
      i18nKey: "PAGES.TOUGHTS.AFRAID",
    },
    {
      i18nKey: "PAGES.TOUGHTS.DEPRESSED",
    },
    {
      i18nKey: "PAGES.TOUGHTS.LONELY",
    },
    {
      i18nKey: "PAGES.TOUGHTS.DELUDED",
    },
    {
      i18nKey: "PAGES.TOUGHTS.ANNOYED",
    },
    {
      i18nKey: "PAGES.TOUGHTS.COLD",
    },
    {
      i18nKey: "PAGES.TOUGHTS.CONFUSED",
    },
    {
      i18nKey: "PAGES.TOUGHTS.PASSIVE",
    },
    {
      i18nKey: "PAGES.TOUGHTS.PREOCCUPIED",
    },
    {
      i18nKey: "PAGES.TOUGHTS.INSECURE",
    },
    {
      i18nKey: "PAGES.TOUGHTS.REPRESSED"
    },
    {
      i18nKey:"PAGES.TOUGHTS.FRURSTRATED"
    },
    {
      i18nKey: "PAGES.TOUGHTS.DISGUSTED",
    },
    {
      i18nKey: "PAGES.TOUGHTS.GUILTY",
    },
    {
      i18nKey: "PAGES.TOUGHTS.DISCOURAGED"
    }
  ]
  currentTought = ''
  constructor() { }

  ngOnInit() {
  }
  submit(){}


}
