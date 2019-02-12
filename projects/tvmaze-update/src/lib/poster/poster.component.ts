import { Component, OnInit } from '@angular/core';
import { TvmazeUpdateService } from '../tvmaze-update.service';
import { User } from '../../public_api';
import { _ } from 'underscore';

@Component({
  selector: 'tvu-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  users: User[];
  
  constructor(private tvmazeService: TvmazeUpdateService) { }

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
