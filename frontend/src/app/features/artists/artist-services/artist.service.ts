import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../../../core/interfaces/artist';
import { ApiService } from '../../../shared/services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ArtistService extends ApiService<Artist> {
  constructor() {
    super(inject(HttpClient), 'artists');
  }
}
