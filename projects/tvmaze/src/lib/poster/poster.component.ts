import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../tvmaze.service';
import { User } from '../../public_api';
import { _ } from 'underscore';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  users: User[];
  
  constructor(private tvmazeService: TvmazeService) { }

  ngOnInit() {
    this.tvmazeService.getPagedUsers(2).subscribe(x => {
      this.users = x.data;
    });
  }
  
  getValueFromThirdPartyLibDependency() {

    // returerer tallet: 3
    return _.map([1, 2, 3], function(num: number) { return num * 3; })[0];
  }
}
