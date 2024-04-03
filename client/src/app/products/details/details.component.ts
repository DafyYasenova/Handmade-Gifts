import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Like } from 'src/app/types/likes';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  liked: boolean = false;
  product = {} as Product;
  isLiked: { [productId: string]: { liked: boolean, likeId?: string } } = {};
  productId: string = '';
  userId: string | null = null;
  productOwnerId: string = '';
  showDeleteConfirmationModal: boolean = false;
  likeId: string | undefined = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const productId = this.activatedRoute.snapshot.params['id'];

    this.apiService.getOneProduct(productId).subscribe((product) => {
      this.product = product;
      this.productId = product._id as unknown as string;
      this.productOwnerId = product._ownerId as unknown as string;

    });

    this.userId = localStorage.getItem('userId');
    this.checkLikedStatus();
  }

  checkLikedStatus(): void {

    this.apiService.getAllLikes().subscribe((likes: Like[]) => {
      this.liked = likes.some(
        (like) => {
          if (
            like._ownerId === this.userId &&
            like.productId === this.productId
          ) {
            this.likeId = like._id;
            return true;

          }
          return false;
        });
    })
  }

  toggleLike(): void {
    if (this.liked) {
      this.removeLike();
    } else {
      this.addLike();
    }
  }

  addLike(): void {
    const canLike = this.userId !== this.productOwnerId;

    if (this.userId !== null && canLike) {
      this.apiService.addLike(this.userId, this.productId).subscribe({

        next: (like) => {
          console.log('Product liked successfully');
          this.liked = true;
          this.likeId = like._id;
        },

        error: (error) => {
          console.error('Error adding like:', error);
        }
      });

    } else if (!canLike) {
      console.log("You can't like your own product");

    }
  }


  removeLike(): void {
    if (this.userId) {

      this.likeId && this.apiService.removeLike(this.likeId).subscribe({
        
        next: () => {
          console.log('Product unliked successfully');
          this.liked = false;
        },
        error: (error) => {
          console.error('Error removing like:', error);
        }
      });
    }

  }


  showDeleteModal(): void {
    this.showDeleteConfirmationModal = true;
  }

  deleteProduct() {

    this.apiService.deleteProduct(this.product, this.productId).subscribe({
      next: () => {

        console.log('Product deleted successfully');

        this.router.navigate(['/products']);
      }, error: (error) => {

        console.error('Error deleting product:', error);
      }
    });
  }

  cancel() {
    this.showDeleteConfirmationModal = false;
  }
}


