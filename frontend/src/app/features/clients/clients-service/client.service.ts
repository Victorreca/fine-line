import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../../core/interfaces/client';
import { ApiService } from '../../../shared/services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends ApiService<Client> {
  constructor() {
    super(inject(HttpClient), 'clients');
  }
}
