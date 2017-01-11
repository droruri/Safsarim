import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/distinctUntilChanged";
import {LeagueServiceService} from "../league-service.service";
import {log} from "util";

@Component({
  selector: 'app-find-ticket',
  templateUrl: './find-ticket.component.html',
  styleUrls: ['./find-ticket.component.css']
})
export class FindTicketComponent implements OnInit {
  ngOnInit(): void {
    this.leagueServiceService.getLeagues().subscribe((leagues) => {
      this.leagues = leagues
    });

  }

  model: any;
  searching = false;
  searchFailed = false;
  leagues: any;

  constructor(private leagueServiceService: LeagueServiceService) {
  }

  getLeagueResults(userType: string) {
    return this.leagues.map(res => res.caption).filter(res => res.contains(userType));
  }

  search = (text: Observable<string>) =>
    text
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.leagues.map((leagueObject) => leagueObject.caption)
          .filter(caption => new RegExp(term, 'gi').test(caption))
          .splice(0, 10));
}
